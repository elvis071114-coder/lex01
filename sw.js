/* LEX-01 offline helper. Always asks the network first (so updates you upload show up right away);
   only when there is no connection (or it takes over 8 s) it opens the last copy saved on this device.
   version.json and anything from other sites (Google sign-in, Gemini, fonts) are never touched. */
const C = 'lex01-v1';
const CORE = ['./', 'app.html', 'icon.png', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'manifest.webmanifest'];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'no-store' })).catch(() => {})))));
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== C) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin || /version\.json$/.test(u.pathname) || /\/sw\.js$/.test(u.pathname)) return;
  const key = u.origin + u.pathname;              // app.html?v=1.2.3 and app.html share one saved copy
  e.respondWith((async () => {
    const c = await caches.open(C);
    try {
      const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), 8000);
      const res = await fetch(u.href, { cache: 'no-store', credentials: 'same-origin', signal: ctl.signal });
      clearTimeout(tm);
      if (res.ok && res.type === 'basic') c.put(key, res.clone()).catch(() => {});
      return res;
    } catch (err) {
      const hit = await c.match(key) || (r.mode === 'navigate' ? await c.match(u.origin + u.pathname.replace(/[^/]*$/, '') + 'app.html') : null);
      if (hit) return hit;
      throw err;
    }
  })());
});

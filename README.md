# LEX-01

**[中文](#中文) · [English](#english) · [日本語](#日本語)**

App: https://elvis071114-coder.github.io/lex01/

---

## 中文

英文・日本語・中文的單字卡 + 抽卡 App。

- **第一次使用**：用 Google 帳號登入，再貼上你自己的免費 Gemini 金鑰（[aistudio.google.com/apikey](https://aistudio.google.com/apikey)），兩樣都完成才會進入 App。
- **進度**：存在你自己 Google 雲端硬碟的隱藏 App 資料夾（只有 LEX-01 讀得到），換裝置登入同一個帳號就能接著學；兩台同時開著也會自動同步。Gemini 金鑰也存在那裡，新裝置不用再輸入。這個 repo 裡沒有任何金鑰。
- **排行榜**：登入的使用者可以看到彼此的成績，每個人只能改自己的那一筆。
- **安裝成 App**（全螢幕、有圖示、可離線）：
  - iPhone / iPad：Safari →「分享」→「加入主畫面」
  - Android：Chrome →「安裝應用程式」
  - Windows / Mac：Chrome 或 Edge → 網址列右邊的「安裝」
- **自動更新**：App 會檢查 `version.json`，有新版本就自己更新（不會打斷正在做的題目）。

## English

A flashcard + gacha app for English, Japanese and Chinese.

- **First launch**: sign in with Google, then paste your own free Gemini key ([aistudio.google.com/apikey](https://aistudio.google.com/apikey)). Both are required to enter the app.
- **Progress**: kept in a hidden app folder in your own Google Drive (only LEX-01 can read it). Sign in with the same account on any device to continue; two devices open at once stay in sync. Your Gemini key is kept there too, so a new device won't ask again. This repo contains no keys.
- **Leaderboard**: signed-in users can see each other's scores; everyone can only change their own row.
- **Install as an app** (full screen, own icon, works offline):
  - iPhone / iPad: Safari → Share → Add to Home Screen
  - Android: Chrome → Install app
  - Windows / Mac: Chrome or Edge → the Install icon at the right of the address bar
- **Auto-update**: the app checks `version.json` and updates itself (never in the middle of a question).

## 日本語

英語・日本語・中国語の単語カード + ガチャアプリです。

- **初回起動**：Google アカウントでログインし、自分の無料 Gemini キー（[aistudio.google.com/apikey](https://aistudio.google.com/apikey)）を貼り付けます。両方そろうとアプリに入れます。
- **進捗**：自分の Google ドライブの隠しアプリフォルダ（LEX-01 だけが読めます）に保存されます。同じアカウントでログインすればどの端末でも続きから学べ、2台同時に開いていても自動で同期します。Gemini キーもそこに保存され、新しい端末で再入力は不要です。このリポジトリにキーは含まれていません。
- **ランキング**：ログイン中のユーザー同士で成績が見られます。自分の行だけ変更できます。
- **アプリとしてインストール**（全画面・アイコン付き・オフライン可）：
  - iPhone / iPad：Safari →「共有」→「ホーム画面に追加」
  - Android：Chrome →「アプリをインストール」
  - Windows / Mac：Chrome または Edge → アドレスバー右の「インストール」
- **自動更新**：`version.json` を確認し、新しい版があれば自動で更新します（問題の途中では更新しません）。

---

| File | Purpose |
|---|---|
| `index.html` | Home page (open / install steps) |
| `app.html` | The app |
| `version.json` | Current version used for auto-update |
| `manifest.webmanifest`, `sw.js` | Lets phones and computers install it and open it offline |
| `icon*.png`, `apple-touch-icon.png` | Icons |

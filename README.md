# LEX-01 · 多語單字卡

英文・日本語・中文的單字卡 + 抽卡 App。

- **網址**：https://elvis071114-coder.github.io/lex01/
- **第一次使用**：用 Google 帳號登入，再貼上你自己的免費 Gemini 金鑰（[aistudio.google.com/apikey](https://aistudio.google.com/apikey)）。兩樣都完成才會進入 App。
- **進度**：存在你自己 Google 雲端硬碟的隱藏 App 資料夾（只有 LEX-01 讀得到），換裝置登入同一個帳號就能接著學。Gemini 金鑰也會存在那裡，新裝置不用再輸入。這個 repo 裡沒有任何金鑰。
- **安裝成 App**（全螢幕、有自己的圖示、可離線）：
  - iPhone / iPad：Safari →「分享」→「加入主畫面」
  - Android：Chrome →「安裝應用程式」
  - Windows / Mac：Chrome 或 Edge → 網址列右邊的「安裝」
- **自動更新**：App 會檢查 `version.json`，有新版本就自己更新（不會打斷正在做的題目）。上傳新檔案到這個 repo 就等於發佈更新。

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 首頁（打開 App／安裝說明） |
| `app.html` | App 本體 |
| `version.json` | 目前版本，App 用它判斷要不要更新 |
| `manifest.webmanifest`、`sw.js` | 讓手機和電腦可以「安裝成 App」、沒網路也能打開 |
| `icon.png`、`icon-192.png`、`icon-512.png`、`apple-touch-icon.png` | 圖示 |

# PVQC 計算機概論英文練習系統

這是一個純 HTML / CSS / JavaScript 的英文單字練習網站，可直接部署到 GitHub Pages。

## 四個關卡

1. 英文 → 中文，每次 10 題
2. 中文 → 英文，每次 10 題
3. 英文 → 詞性，每次 10 題
4. 英文發音 → 英文，每次 10 題

## GitHub Pages 部署

1. 建立一個新的 GitHub Repository，例如 `PVQC-Computer-English`
2. 將本資料夾中的 `index.html`、`style.css`、`script.js`、`words.js`、`README.md` 上傳。
3. GitHub Repository → Settings → Pages
4. Source 選擇 `Deploy from a branch`
5. Branch 選 `main` / `root`
6. 儲存後等待 GitHub Pages 建置完成。

## 修改題庫

開啟 `words.js`，每筆資料格式：

`{ "word": "computer", "zh": "電腦", "pos": "noun" }`

詞性可使用：
- noun
- verb
- adjective
- adverb

## 注意

第四關使用瀏覽器內建 Web Speech API 播放英文發音。建議使用最新版 Chrome 或 Edge。

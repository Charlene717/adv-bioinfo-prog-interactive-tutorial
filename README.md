# Advanced Bioinformatics Programming — Interactive Tutorial

**🌐 Live demo / 線上瀏覽**: <https://charlene717.github.io/adv-bioinfo-prog-interactive-tutorial/>


生醫資訊程式設計 (進階) · 互動式教程

## 結構
- `index.html` — 樞紐頁，列出 5 大區塊 20 個主題
- 20 個主題頁面 (Block A 進階語法 / Block B 效能與運算 / Block C 資料工程 / Block D 軟體工程 / Block E 再現性與部署)
- `styles.css` — 共用樣式 (深藍/cyan 程式設計感配色)
- `i18n.js` — 中英雙語切換 (`advprog_lang` localStorage key)

## 姊妹資料夾
- `references/index.html` — 參考資料佐證 (論文、官方文件、Best Practices)
- `adv-bioinfo-prog-quiz/index.html` — 互動考題 (20 主題 × 10 題 = 200 題)

## 設計沿用
- 主體沿用 scRNA-seq Interactive Tutorial 的版面語彙：page-hero / section / card-grid / code-tabs / decision-tree / quiz-section
- 程式碼比重：R/Python 並重 (含 CLI 與 Docker 範例)
- 配色：深藍青 + 靛紫 (`#0e7490` accent, `#4338ca` secondary) 區隔自 scRNA-seq teal、Systems Biology indigo

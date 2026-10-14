# 和牛すき焼きしゃぶしゃぶSakura 名古屋店 公式サイト

日本語・英語・簡体字中国語・繁体字中国語・韓国語の5言語に対応した公式サイトです。
ページ構成：トップ／お品書き／お席・ご宴会／食べ方／店舗・アクセス／よくある質問／ご予約
GitHub Pages で無料公開しています。

- 公開の手順 → [`docs/deploy.md`](docs/deploy.md)
- 写真の差し替え一覧 → [`docs/photos.md`](docs/photos.md)

---

## よくある更新作業

サイトの文章や価格は、すべて `src/data/` フォルダ内のファイルにまとまっています。
GitHub の画面上でファイルを開き、右上の鉛筆マーク（Edit）から直接書き換えて「Commit changes」を押すと、2〜3分後にサイトへ自動反映されます。

| やりたいこと | 編集するファイル |
|---|---|
| 価格・コース内容を変える | `src/data/menu.json` |
| 営業時間・住所・電話番号・予約URLを変える | `src/data/site.json` |
| 日本語の文章を変える | `src/data/i18n/ja.json` |
| 英語の文章を変える | `src/data/i18n/en.json` |
| 中国語（簡体字）の文章を変える | `src/data/i18n/zh-hans.json` |
| 中国語（繁体字）の文章を変える | `src/data/i18n/zh-hant.json` |
| 韓国語の文章を変える | `src/data/i18n/ko.json` |
| お席・宴会の説明を変える | 各言語ファイルの `banquet` の部分 |
| 写真を差し替える | `public/images/` に同じファイル名でアップロード |

### 価格を変える例

`src/data/menu.json` で、変えたいコースの `"price"` の数字を書き換えます（税込・カンマなし）。

```json
"price": 9900,
```

価格は全言語のページに自動で反映されます。

### 書き換えるときの注意

- `"` （ダブルクォーテーション）や `,` （カンマ）を消さないでください。消えるとサイトの生成が失敗します。
- 失敗した場合は、GitHub の「Actions」タブに赤い × が表示されます。直前の変更を見直すか、Claude にエラー内容を貼り付けて相談してください。
- 日本語の文章を変えたら、他の言語のファイルも同じ箇所を直すのを忘れずに。

### コースを追加する

`menu.json` の既存のコースを1つ丸ごとコピーして下に貼り付け、`id`（英数字・重複不可）、名前、説明、価格、写真のファイル名を書き換えます。
`"featured": true` にしたコースがトップページに表示されます（最大3件）。
`"category"` は `sukiyaki`（すき焼き）、`shabushabu`（しゃぶしゃぶ）、`banquet`（宴会プラン）、`alacarte`（一品・お飲み物）から選びます。宴会プランは「お席・ご宴会」ページにも表示されます。

---

## 【仮】になっている項目

公開前に、次の項目を実際の情報に書き換えてください。ファイル内で「仮」「placeholder」「暂定」「暫定」「임시」を検索すると見つかります。

- 住所・郵便番号・最寄り駅・地図の座標（`site.json`）
- 電話番号（`site.json`）
- 予約サービスのURL（`site.json` の `reservationUrl`）
- 休業日（`site.json`）
- 駅からの道順（各言語ファイルの `access.directions`）
- お席の種類と人数、宴会プランの内容（各言語ファイルの `banquet`、`menu.json`）
- キャンセル規定（各言語ファイルの `faq` と `reserve.notes`）
- SEO文中の「○○駅」「XX Station」（各言語ファイルの `seo`）

---

## 技術メモ（開発者向け）

- [Astro](https://astro.build/) による静的サイト。`npm install` → `npm run dev` でローカル確認。
- URL構成：`/`（日本語）、`/en/`、`/zh-hans/`、`/zh-hant/`、`/ko/`。
- 各言語ページに hreflang・canonical・OGP、トップに Restaurant、FAQ に FAQPage の構造化データを出力。
- `sitemap.xml` と `robots.txt` は自動生成。
- 中国本土での表示を考慮し、Google Fonts・Google マップ埋め込みなどの外部リソースは使っていません（フォントはセルフホスト、地図は画像＋各地図アプリへのリンク）。
- 公開URLとサブパスは GitHub Actions（`.github/workflows/deploy.yml`）が自動設定します。

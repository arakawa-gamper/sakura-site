# GitHub Pages で公開する手順

専門知識がなくても、ブラウザだけで公開できます。所要時間は30分ほどです。

---

## 1. GitHub アカウントを作る

[github.com](https://github.com/) で「Sign up」からアカウントを作成します（無料）。
ユーザー名は公開URLの一部になります（独自ドメインを使わない場合）。例：`sakura-wagyu`

## 2. リポジトリ（サイトの保管場所）を作る

1. 右上の「＋」→「New repository」
2. Repository name：`sakura-site` など（半角英数字）
3. **Public** を選ぶ（無料プランで GitHub Pages を使うには Public が必要です）
4. 他は何もチェックせず「Create repository」

## 3. ファイルをアップロードする

1. お渡しした ZIP を解凍します。
2. 作成したリポジトリの画面で「uploading an existing file」のリンクをクリック。
3. 解凍した `sakura-site` フォルダの**中身すべて**（`src`、`public`、`docs`、`package.json` など）をドラッグ＆ドロップします。
   フォルダごとではなく、中身を選んでドロップしてください。
4. 下部の「Commit changes」を押します。

### `.github` フォルダについて（重要）

Mac や Windows では、名前が「.」で始まるフォルダ（`.github`）が非表示になっていて、アップロードされないことがあります。
アップロード後、リポジトリのトップに `.github` フォルダが無ければ、次の手順で作ってください。

1. 「Add file」→「Create new file」
2. ファイル名の欄に `.github/workflows/deploy.yml` と入力（`/` を打つと自動でフォルダになります）
3. 解凍したフォルダ内の `deploy.yml`（`.github/workflows/` の中）をメモ帳などで開き、中身をすべてコピーして貼り付け
   （見つからない場合は、ZIP 内の `docs/deploy.yml.txt` に同じ内容があります）
4. 「Commit changes」

## 4. GitHub Pages を有効にする

1. リポジトリの「Settings」→ 左メニューの「Pages」
2. 「Build and deployment」の **Source** を「**GitHub Actions**」に変更

これだけで準備完了です。

## 5. 公開を確認する

1. リポジトリ上部の「Actions」タブを開きます。
2. 「Deploy to GitHub Pages」が動いていれば、2〜3分で緑のチェックが付きます。
   動いていなければ、左の「Deploy to GitHub Pages」→ 右の「Run workflow」を押してください。
3. 緑のチェックが付いたら、「Settings」→「Pages」に表示される URL を開きます。
   例：`https://sakura-wagyu.github.io/sakura-site/`

赤い × が付いた場合は、そのエラー画面のスクリーンショットを Claude に見せてください。

---

## 6. 独自ドメインを設定する（任意）

`sakura-wagyu.com` のような独自ドメインを使う場合の手順です。ドメインはお名前.com、Cloudflare、ムームードメインなどで年1,500〜3,000円程度で取得できます。

1. GitHub：「Settings」→「Pages」→「Custom domain」にドメインを入力して「Save」
2. ドメイン会社の管理画面で DNS を設定します。
   - `www` 付きで使う場合：CNAME レコード　`www` →　`ユーザー名.github.io`
   - `www` なしで使う場合：A レコードを4つ　`185.199.108.153`／`185.199.109.153`／`185.199.110.153`／`185.199.111.153`
   （最新の値は GitHub 公式ドキュメント「Managing a custom domain for your GitHub Pages site」で確認してください）
3. 反映まで数分〜最大48時間かかります。GitHub の画面に「DNS check successful」と出たら、「**Enforce HTTPS**」にチェックを入れます。
4. 「Actions」タブから「Run workflow」をもう一度実行すると、サイト内の URL が新しいドメインに切り替わります。

---

## 7. 公開後にやること

1. **Google Search Console**（無料）にサイトを登録し、`sitemap.xml` を送信します。検索結果に早く載るようになります。
2. **Google ビジネスプロフィール**のウェブサイト欄に URL を登録します。
3. Instagram、TripAdvisor、OpenRice（香港）、Naver（韓国）、大衆点評（中国）など、登録している媒体すべてに URL を載せます。

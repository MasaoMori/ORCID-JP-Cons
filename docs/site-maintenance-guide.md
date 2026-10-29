# ORCID日本コンソーシアム サイト更新ガイド

このガイドは、このサイトを複数人で更新する担当者向けです。お知らせの投稿、固定ページの作成、画像やPDFの追加、ヘッダと右ペインのメニュー編集、公開後の確認方法を説明します。ブラウザでGitHubを操作する方法を中心に、手元のパソコンで確認する方法も紹介します。

更新するファイルを変更用ブランチにまとめ、プルリクエストで別の担当者に確認してもらい、`main` に取り込むと公開処理が動きます。画像と本文、必要なメニュー変更は同じブランチに入れてください。

## 最初に書くFront Matter

Front Matterは、Markdownファイルの先頭に書くページの設定です。先頭行から `---` で囲み、空行の後に本文を続けます。次の雛形をコピーし、タイトル・日付・公開パスを書き換えてください。

**ポストの場合**：`_posts/2026-10-28-event-report.md` に保存します。

```yaml
---
layout: post
title: "イベント開催報告"
date: '2026-10-28'
permalink: /2026/10/28/event-report/
---
```

**固定ページの場合**：`pages/service-guide.md` に保存します。フォルダ名は `pages` ですが、layoutの値は単数の `page` です。

```yaml
---
layout: page
title: "サービス案内"
permalink: /service-guide/
---
```

| 設定 | 書く内容 |
| --- | --- |
| `layout` | ポストは `post`、固定ページは `page`。表示形式を指定 |
| `title` | 読者に表示する記事・ページのタイトル |
| `date` | ポストの公開日。新規作成時はファイル名の日付とそろえる。固定ページでは省略可 |
| `permalink` | 公開パス。上の例では先頭と末尾に `/` を付ける。ドメイン名や `/ORCID-JP-Cons` は含めない |

上は、このサイトで使う**運用上の最小雛形**です。実装上、layoutは `_config.yml` の既定値から、投稿の日付はファイル名から補えますが、ここでは明記します。permalinkも省略できますが、公開URLを明確にして維持するため指定を推奨します。`original_url`、`wordpress_id`、`categories`、`tags` は新規作成に必須ではありません。

コロンの後には半角スペースを入れます。タイトルを引用符で囲むと、記号を含む場合も扱いやすくなります。本文を含む雛形は後述の「お知らせを投稿する」「固定ページを作成する」を参照してください。

## GitHubの画面から投稿を作成またはアップロードする

GitHub.comの画面だけで投稿を登録・公開できます。画面上で本文を書く方法と、作成済みのMarkdownファイルをアップロードする方法を説明します。手元でGitコマンドを使う必要はありません。

### 変更用ブランチを作る

1. [このサイトのリポジトリ](https://github.com/MasaoMori/ORCID-JP-Cons)を開きます。各担当者は自分のGitHubアカウントを使います。管理者があらかじめ編集権限を付与してください。
2. ブランチ選択で `main` を選び、そこから作業用ブランチを作成します。名前の例は `content/2026-10-event-report` です。
3. 以後の本文作成、画像アップロード、メニュー変更は、すべてこのブランチで行います。

ブランチは変更内容を本番から分けて保存する場所です。同じ記事を複数人で編集する場合は、担当者と編集範囲を先に共有してください。

### 本文を作成または編集する

1. 対象フォルダを開き、**Add file → Create new file** からファイルを作成します。既存ファイルは開いて鉛筆アイコンの編集操作を選びます。
2. 後述の雛形を貼り付け、タイトル、日付、本文などを書き換えます。
3. **Preview** でMarkdownの内容を確認します。この画面はGitHub上のプレビューであり、サイトのテーマ、画像のURL補正、年別一覧などの完成表示とは異なります。
4. **Commit changes** で、選択中の作業用ブランチに変更を保存します。保存時に表示されるブランチ名を確認してください。説明は「10月イベント報告を追加」など具体的に書きます。

### 作成済みのMarkdownを直接アップロードする

1. 上のFront Matterと本文を、UTF-8の `.md` ファイルに保存します。投稿の名前は `2026-10-28-event-report.md` などにします。Word文書や `.md.txt` になっていないことを確認します。
2. GitHubで作業用ブランチを選択し、投稿なら `_posts/`、固定ページなら `pages/` を開きます。
3. **Add file → Upload files** を選び、ファイルをドラッグするか、**choose your files** から選びます。`_posts/` を開いている場合はMarkdownファイル自体を選び、同名の `_posts/` フォルダを重ねないでください。
4. 保存先とファイル名を確認し、**Commit changes** または **Propose changes** で同じ作業用ブランチへ保存します。ボタン名は画面によって異なります。同じパスにあるファイルを更新する場合は、意図した差し替えになっていることを確認します。
5. 画像・PDFも同じブランチへアップロードします。保存先が未作成なら、パソコン側で `assets/images/2026/` などの構成を作り、リポジトリ直下のUpload files画面にフォルダごとドラッグします。確定前に保存先の階層を確認してください。

固定ページをメニューにも表示する場合は、同じブランチで `_data/navigation.yml` を編集します。ファイルをアップロードしただけでは、本番公開やメニュー登録は完了しません。

### 確認を依頼して公開する

1. 本文と必要な画像・メニュー変更をすべて保存したら、作業用ブランチから `main` に向けたプルリクエストを作成します。
2. 説明に、変更した内容と確認してほしい点を書きます。別の担当者が **Files changed** で本文・画像・リンク先を確認します。
3. 確認後、担当者がプルリクエストをマージします。マージは、変更を `main` に取り込む操作です。
4. リポジトリの **Actions** で **Deploy Jekyll to GitHub Pages** が成功したことを確認します。
5. 公開サイトを開き、本文、画像、メニュー、スマートフォンでの見え方を確認します。

現在の自動公開は `main` への更新で動作します。作業用ブランチへのコミットやプルリクエスト作成だけでは、本番公開やプレビューサイトの自動作成は行われません。マージ前にサイト全体を確認するには、後述のローカルプレビューを使います。

`main` へ直接保存した場合も自動公開が始まります。通常は変更用ブランチで本文と資料をまとめ、差分を確認してから取り込みます。レビューは推奨運用であり、ブランチ保護や必須レビューの設定をこのガイドで保証するものではありません。

## slugの意味と付け方

**slug（スラッグ）は、記事やページをURLで識別する短い名前です。** 例えば「イベント開催報告」なら、内容を表す `event-report` をslugにします。命名例の `slug` は、自分で決めた名前に置き換える部分です。

| 項目 | 例 |
| --- | --- |
| 読者に表示するタイトル | イベント開催報告 |
| slug | `event-report` |
| 投稿ファイル名 | `2026-10-28-event-report.md` |
| permalink | `/2026/10/28/event-report/` |
| 独自ドメイン切替後のURL | `https://orcid-jp.net/2026/10/28/event-report/` |

新規作成では、半角の小文字英字・数字・ハイフンを使い、内容が分かる名前を推奨します。空白の代わりにハイフンで単語をつなぎます。タイトルは日本語で構いません。固定ページなら `service-guide` をslugとして、`pages/service-guide.md` と `permalink: /service-guide/` を組み合わせます。

このサイトでは、`permalink` を明示すると公開URLはその値に従います。ファイル名のslugとURL末尾は別々に指定できますが、新規作成ではそろえると管理しやすくなります。日付や階層も含めて、他の記事と公開URLが重ならないようにしてください。既存記事の日本語slugやpermalinkは、見た目を整える目的で変更せず維持します。

## 更新する場所を選ぶ

| 更新したい内容 | 保存先 | 公開後の表示 |
| --- | --- | --- |
| イベント案内や活動報告などのお知らせ | `_posts/` | トップページの最新10件と、右ペインの年別一覧に自動表示 |
| 入会案内や参加機関などの固定ページ | `pages/` | URLにアクセスすると表示。メニューへの追加は手動 |
| 新しく追加する画像 | `assets/images/年/` | 本文に画像リンクを書いた場所に表示 |
| 新しく追加するPDFなど | `assets/files/年/` | 本文からリンクして閲覧やダウンロード |
| ヘッダと右ペインのサイト案内 | `_data/navigation.yml` | 設定した順序と階層で表示 |
| FAQトップと対象別FAQ | `faq/` | 独立したHTMLページとして表示 |

画像や資料用のフォルダがない場合は、新しく作成します。既存の `wp-content/uploads/` は移行済み記事の画像を保持する場所です。既存記事から参照されているファイルは残してください。

`_site/` は自動生成された公開用ファイルです。ここを直接編集しても次のビルドで上書きされるため、更新元のファイルを編集します。

## お知らせを投稿する

### ファイル名と雛形

`_posts/` に `年-月-日-短い英語名.md` の形で保存します。月と日は2桁にします。例は `_posts/2026-10-28-event-report.md` です。末尾の数字は既存記事の移行管理用なので、新規記事には不要です。

次の雛形をコピーし、ファイル名の日付、`date`、`permalink` の日付をそろえてください。

```markdown
---
layout: post
title: "イベント開催報告"
date: '2026-10-28'
permalink: /2026/10/28/event-report/
---

2026年10月に開催したイベントについて報告します。

## 開催概要

ここに本文を書きます。

## 関連情報

[お問い合わせ](/contact/)
```

先頭の `---` で囲まれた部分をFront Matterと呼びます。ページの種類やタイトル、公開URLなどを指定する設定です。最初の `---` はファイルの先頭行に置きます。

| 設定 | 書く内容 |
| --- | --- |
| `layout: post` | お知らせ用の表示形式 |
| `title` | 記事の見出しと一覧に表示するタイトル |
| `date` | 公開日。イベント開催日とは区別して指定 |
| `permalink` | 公開先のURL。ほかの記事と重ならない値 |

本文のタイトルは自動表示されるため、同じタイトルを本文の `#` 見出しとして重ねて書く必要はありません。本文の見出しは `##` から始めます。

投稿は日付の新しい順に並び、トップページには最新10件、右ペインの「投稿一覧」には全投稿が年別に表示されます。投稿用の `navigation.yml` 編集は不要です。年も件数も自動更新されます。トップの件数は `_config.yml` の `accelerate.home_posts_limit` で設定します。

トップの抜粋は通常、冒頭段落から作られ、HTMLを除去して最大160文字に短縮表示されます。冒頭に記事の要点を書いてください。`author` は任意で、指定すると日付の横に表示されます。現在のレイアウトにはcategoriesやtagsによる分類一覧を表示する処理はありません。

### 下書きと公開日

未完成の投稿は作業用ブランチで編集を続けます。記事の設定に `published: false` を追加すると、通常のビルドでは出力されません。公開するときにこの行を削除します。

未来の日付の投稿は通常のビルドでは公開されません。また、日付を迎えただけでは公開処理が自動実行されません。予約公開には別途実行の仕組みが必要なので、通常は公開する日に当日以前の公開日を指定し、マージしてください。

移行済み記事にある `original_url` や `wordpress_id` は、新規投稿では不要です。既存記事を修正するときは、公開URLを維持するため `permalink` をそのまま残します。

## 固定ページを作成する

`pages/` に、内容が分かるファイル名で保存します。例は `pages/service-guide.md` です。

```markdown
---
layout: page
title: "サービス案内"
permalink: /service-guide/
---

このページではサービスの利用方法を紹介します。

## 利用できるサービス

ここに本文を書きます。

[お問い合わせ](/contact/)
```

この場合、公開先はサイト内の `/service-guide/` です。保存先フォルダの `pages/` はURLに付きません。固定ページのファイル名に日付は不要です。

`pages/subscription-apply-284.md` の「入会機関募集」は `/2020/01/16/subscription-apply/` という日付付きURLですが、固定ページです。保存先が `pages/` なら、Front Matterにdateがあっても投稿一覧には入りません。

ページを作るだけで公開先のファイルは生成されますが、現在のヘッダとサイト案内は手動設定です。読者がメニューから開けるようにするには、後述の方法で `_data/navigation.yml` に登録してください。

タイトルを表示しない特別なページでは `hide_title: true` を設定できます。トップページはこの設定で「ホーム」の大見出しを非表示にしています。

## 画像やPDFを貼り付ける

### ファイルを保存する

1. 画像を `event-report-01.jpg` など、半角英数字とハイフンの名前にします。拡張子の大文字・小文字も本文の指定とそろえます。
2. 作業用ブランチで、画像は `assets/images/2026/`、PDFは `assets/files/2026/` に保存します。
3. GitHubのブラウザ操作では、保存先フォルダを開き **Add file → Upload files** からアップロードします。フォルダがなければ、パソコン側でフォルダ構成を作ってアップロードするか、Gitで追加します。
4. 本文と同じ作業用ブランチへコミットします。

スマートフォンでも読み込みやすい大きさに画像を縮小してから追加します。同名ファイルの上書きは、それを参照する既存記事にも反映されるので、新しい画像には別の名前を付けてください。

### Markdownで画像を表示する

画像を `assets/images/2026/event-report-01.jpg` に保存した場合は、本文に次のように書きます。

```markdown
![会場で講演を聞く参加者の様子](/assets/images/2026/event-report-01.jpg)

会場の様子。2026年10月撮影。
```

`![ ]` 内には画像の内容を説明する代替テキストを書きます。画像の後に空行を入れて説明を書くと、別の段落になります。

このサイトのMarkdown記事では、`/assets/` のようなサイト内パスに、公開時の `/ORCID-JP-Cons` が自動で補われます。本文には `/ORCID-JP-Cons` や `http://localhost:4000`、パソコン上のファイルパスを書かないでください。独自ドメインへ移行しても同じ本文を使いやすくなります。

この処理は、共通本文の `_includes/content.html` が行います。先頭に `/` があるパスを対象とするので、`![](wp-content/uploads/2026/10/example.jpg)` のように先頭の `/` を省略すると、記事URLの配下を参照してしまいます。既存資料も `![](/wp-content/uploads/2026/10/example.jpg)` のように指定します。`../assets/…` の基準もソースフォルダではなく公開後のURLです。

独自補正は対象タグの二重引用符付き `href`、`src`、`poster` を扱います。CSSの `url()`、`srcset`、単一引用符の属性まで補正されるとは考えないでください。

### 画像の表示幅を指定する

必要な場合は、Markdown本文にHTMLを書けます。

```html
<img src="/assets/images/2026/event-report-01.jpg" alt="会場で講演を聞く参加者の様子" width="640">
```

このサイトのスタイルにより画面幅に収まるよう縮小されます。HTMLの `src` と `href` は、上の例のように半角の二重引用符で囲みます。

### PDFや外部サイトへリンクする

```markdown
[イベント資料を読む PDF](/assets/files/2026/event-handout.pdf)

[ORCID公式サイト](https://orcid.org/)
```

サイト内の固定ページや投稿にも、同じ書き方でリンクできます。

```markdown
[現参加機関](/members/)

[入会機関募集](/2020/01/16/subscription-apply/)
```

本文から別タブで開く場合はHTMLで指定します。

```html
<a href="/assets/files/2026/event-handout.pdf" target="_blank" rel="noopener noreferrer">イベント資料を読む PDF</a>
```

### PDFをページ内へ埋め込む

`pages/orcid-overview.md` と同じく、Liquidの `relative_url` を使う方法もあります。検証公開ではbaseurlが付き、独自ドメイン切替後にbaseurlを空にするとルートからのパスになります。表示できない端末向けに通常リンクも添えます。

```html
<iframe
  src="{{ '/assets/files/2026/event-handout.pdf' | relative_url }}"
  title="イベント資料 PDF" width="100%" height="850">
</iframe>
<a href="{{ '/assets/files/2026/event-handout.pdf' | relative_url }}"
   target="_blank" rel="noopener noreferrer">PDFを別タブで開く</a>
```

### FAQのHTMLを編集する場合

`faq/index.html` と、個人向け・機関向けFAQは、共通レイアウトを使わない独立したHTMLです。Markdown記事向けのURL補正は働きません。FAQトップから画像を参照するなら、例えば `src="../assets/images/2026/event-report-01.jpg"` のように、そのHTMLからの相対パスを使います。

FAQ間のリンクは `href="orcid-individual-faq-ja.html"`、FAQトップへのリンクは `href="index.html"` です。現在は3つのFAQページへのリンクを別タブで開く運用なので、追加するリンクにも `target="_blank" rel="noopener noreferrer"` を付けます。

## メニューを編集する

`_data/navigation.yml` で、`primary` がヘッダ、`sidebar` が右ペインの「サイト案内」、`footer` がフッターを設定します。ヘッダと右ペインは独立しているため、両方に表示したい場合は両方へ登録します。

### 現在のヘッダ

```yaml
primary:
  - title: ホーム
    url: /
  - title: ORCIDとは？
    url: /orcidとは？/
  - title: 入会機関募集
    url: /2020/01/16/subscription-apply/
  - title: 現参加機関
    url: /members/
  - title: FAQ
    url: /faq/
    new_tab: true
  - title: お問い合わせ
    url: /contact/
```

上から順に表示されます。項目を移動するときは、`- title` とその下の `url`、`new_tab`、`children` をひとまとまりで移します。

| 設定 | 役割 |
| --- | --- |
| `title` | メニュー上の表示名。ページ本文のタイトルとは別に指定できる |
| `url` | 移動先。固定ページや投稿の `permalink` と一致させる |
| `new_tab: true` | 別タブで開く。省略した場合は同じタブ |
| `children` | その項目の下に置く子項目 |

`url` に `/ORCID-JP-Cons` を付ける必要はありません。トップページは `/`、FAQトップは `/faq/`、HTML版のFAQは `.html` まで含めたパスを書きます。

### 右ペインへページを追加する

例えば「資料」の中へ「サービス案内」を追加する場合は、既存の `sidebar` 内にある「資料」の `children` に追加します。

```yaml
  - title: 資料
    children:
      - title: 文書
        url: /文書/
      - title: 設立までの資料
        url: /materials/
      - title: サービス案内
        url: /service-guide/
```

この例は既存の「資料」部分の置き換え例です。ファイルの末尾へそのまま追加して「資料」を重複させたり、`sidebar:` をもう一つ作ったりしないでください。

「資料」のように `url` のない親項目は、リンクのない分類名になります。実際のフォルダやURLを作る必要はありません。親にも `url` を設定すると、その親自体もリンクになります。

### YAMLの書き方と削除時の注意

- インデントには半角スペースを使います。タブは使いません。上の例と同じ深さにそろえます。
- コロンの後には半角スペースを入れます。例は `title: サービス案内` です。
- タイトルに `: ` や `#` などを含む場合は、`title: "案内: 新サービス"` のように引用符で囲みます。
- `new_tab` は `true` と書きます。`"false"` のように引用符で囲んだ文字列は使いません。
- メニューから項目を消しても、ページ自体は残ります。ページ自体を削除する場合は、本文中のリンクも確認します。
- 現在は `primary` や `sidebar` を空にすると、タイトルのある固定ページの自動一覧に切り替わります。メニュー自体を非表示にする設定ではありません。

右ペインの「投稿一覧」は、`navigation.yml` ではなく投稿から自動生成します。ここに年や投稿タイトルを手動追加する必要はありません。`nav_exclude: true` は自動一覧用の除外設定で、手動登録したメニュー項目を隠す効果はありません。自動一覧の表示名は `nav_title`、順序は `nav_order` で指定できます。

## 独自ドメインへの切替と既存URLの維持

将来は、`orcid-jp.net` をこのGitHub Pagesサイトの独自ドメインに登録し、`https://orcid-jp.net/` で公開する計画です。検証公開時点の設定と、切替時の設定は次のように区別します。

| 設定 | 検証公開 | 独自ドメイン切替時 |
| --- | --- | --- |
| `_config.yml` の `url` | `https://masaomori.github.io` | `https://orcid-jp.net` |
| `_config.yml` の `baseurl` | `/ORCID-JP-Cons` | `""` 空文字列 |
| サービス案内のURL | `https://masaomori.github.io/ORCID-JP-Cons/service-guide/` | `https://orcid-jp.net/service-guide/` |

切替時は次の値へ変更します。既存のpermalinkや画像・PDFの保存パスは維持します。

```yaml
url: "https://orcid-jp.net"
baseurl: ""
```

### orcid-jp.netを参照している既存記事

`https://orcid-jp.net/…` という絶対URLは、本文のURL補正では変更されません。独自ドメイン切替後は、同じGitHub Pagesサイトのファイルや記事を参照します。同じパスで公開されるものは、絶対URLのまま継続利用できます。相対パスへの一括書き換えは、移転の必須作業ではありません。

例えば2026年10月15日のWorkshop参加報告にある画像3点は、参照URLと同じリポジトリ内の場所に存在します。

```text
wp-content/uploads/2026/10/DSC_6281-1-768x1024-1.jpg
wp-content/uploads/2026/10/DSC_6301-1024x768.jpg
wp-content/uploads/2026/10/PXL_20260915_063207939.jpg
```

切替後、これらは `https://orcid-jp.net/wp-content/uploads/2026/10/…` に対応します。記事同士のリンクは、リンク先のpermalinkから同じURLが生成されることを確認します。全参照先を確認済みという意味ではないので、切替前に画像・PDF・記事・クエリ付きURLなどを点検してください。

検証サイトやローカル確認中でも、絶対URLはその時点のorcid-jp.netへ接続します。画像が見えるだけでGitHub側の配置が正しいと判断せず、検証サイト内の対応URLでも確認します。新規記事は先頭 `/` のパスや `relative_url` を使うと、両環境で確認しやすくなります。

### 切替時の確認

1. 管理者が **Settings → Pages → Custom domain** に `orcid-jp.net` を登録し、その後DNSをGitHub Pagesへ向けます。具体的なDNSレコードは実施時点の[GitHub公式資料](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)で確認します。
2. 上記の `_config.yml` 変更を切替作業に合わせて `main` に反映し、Actionsで再公開します。Jekyllのurl変更だけではドメインの接続先は変わりません。
3. DNS反映とHTTPSの利用状態を確認し、本番ドメインでトップ、記事、画像、PDF、FAQ、メニューを開きます。リンクに `/ORCID-JP-Cons` が残っていないかも確認します。

このリポジトリのようなカスタムActions公開では、GitHub公式資料上、ドメイン登録用のCNAMEファイルは不要です。管理画面の独自ドメイン設定とDNSを確認します。ここに記載した値は切替時の手順であり、現在の設定をすでに変更したという意味ではありません。

## ローカルで公開前に確認する

RubyとBundlerを利用できるパソコンで、リポジトリの作業フォルダへ移動し、最初に依存パッケージを入れます。

```sh
bundle install
```

作業用ブランチを選んだ状態で、次を実行します。

```sh
bundle exec jekyll serve
```

現在の設定では、ブラウザで次のURLを開きます。

```text
http://localhost:4000/ORCID-JP-Cons/
```

Markdownなどを保存すると再生成されます。`_config.yml` を変更した場合は、サーバーを停止して起動し直します。停止はターミナルで `Ctrl+C` を押します。独自ドメイン導入などで `baseurl` を変更した場合は、確認URLもそれに合わせます。

独自ドメイン切替後の `baseurl: ""` では、ローカルの確認URLは `http://localhost:4000/` になります。現在のGemfileは `jekyll 4.4.1`、`jekyll-relative-links 0.6.1`、`webrick ~> 1.9` を指定しています。

表示を開かず、生成できるかだけ調べる場合は次を実行します。

```sh
bundle exec jekyll build
```

`destination is shared by multiple files` という警告は、複数ファイルが同じURLへ出力されることを意味します。新しく指定した `permalink` や `faq/index.html` との重複を確認してください。

## Gitコマンドで更新する場合

GitHubの画面操作に代えて、手元で編集して送る場合の手順です。初回はリポジトリを取得します。

```sh
git clone https://github.com/MasaoMori/ORCID-JP-Cons.git
cd ORCID-JP-Cons
```

2回目以降は取得済みのフォルダで作業します。未保存の変更があれば先に整理してから、最新のmainを基に作業用ブランチを作ります。

```sh
git status
git switch main
git pull --ff-only origin main
git switch -c content/2026-10-event-report
```

本文と必要な資料を作成し、ローカル確認後に保存します。次は投稿と画像・PDFを一緒に追加する例です。対象ファイルを実際に作成したうえで実行します。

```sh
git diff --check
git diff
git add _posts/2026-10-28-event-report.md
git add assets/images/2026/event-report-01.jpg
git add assets/files/2026/event-handout.pdf
git diff --cached --stat
git diff --cached
git commit -m "イベント開催報告と資料を追加"
git push -u origin content/2026-10-event-report
```

固定ページの場合は対象の `pages/` のファイルと、必要なら `_data/navigation.yml` を追加します。未追跡ファイルは `git diff` に出ないので `git status` でも確認します。生成結果の `_site/` やキャッシュは登録しません。GitHubで作業用ブランチからmainへのプルリクエストを作成し、確認後にマージします。

## Actionsで公開処理を確認する

`.github/workflows/pages.yml` は、mainへのpushと `workflow_dispatch` による手動実行を入口にしています。Checkout、Setup Pages、Build Jekyll、Upload site、Deployの順に処理します。`actions/jekyll-build-pages@v1` でリポジトリ直下から `_site/` に生成し、build成功後にdeployします。

途中のbuild成功だけで公開完了と判断せず、deployまで成功し、意図したコミットが対象になっていることを確認します。新しい公開処理が始まると、同じ公開グループの古い実行を中止する設定です。

手動で再生成する場合は **Actions → Deploy Jekyll to GitHub Pages → Run workflow** で通常はmainを選びます。初期設定や障害調査では、管理者が **Settings → Pages** の公開元も確認し、このActionsワークフローを使う構成と一致させてください。

## 公開前後の確認と修正

### 公開前の確認

- 投稿のファイル名が `_posts/YYYY-MM-DD-name.md` になっているか。
- `layout`、タイトル、公開日、公開URLが意図どおりか。
- 本文、画像、PDF、メニュー変更が同じブランチに入っているか。
- リンク先とファイル名の大文字・小文字、拡張子が一致しているか。
- 固定ページを必要なメニューに追加したか。
- プルリクエストの差分に、ほかの担当者の作業を消す変更がないか。

### 表示されない場合

| 症状 | 確認する箇所 |
| --- | --- |
| 投稿が一覧に出ない | `_posts` の先頭の `_`、日付付きのファイル名、未来日、`published: false` |
| 投稿がトップにはないが年別一覧にはある | トップは最新10件まで。古い投稿は年別一覧から開く |
| 固定ページがメニューに出ない | `navigation.yml` の `primary` または `sidebar` に登録したか |
| 画像が出ない | 画像のアップロード漏れ、ブランチ、ファイル名、拡張子、パス |
| 記事内の画像だけ404になる | 先頭 `/` の抜け、出力URLの階層、baseurlの重複を確認 |
| メニュー編集後に公開処理が失敗する | YAMLのインデント、引用符、コロン、**Actions** のエラー内容 |
| 保存したのに本番が変わらない | `main` へのマージと公開処理の完了、ブラウザの再読み込み |
| GitHubのPreviewだけで画像が出ない | 本番とURLの解釈が異なるので、ローカルまたは公開サイトで確認 |

公開後に誤りを見つけたら、修正用ブランチで直して再度マージします。変更全体を取り消す場合は、該当プルリクエストの **Revert** で取り消し用のプルリクエストを作成し、内容を確認してマージする方法があります。通常の誤記修正に履歴の強制上書きは不要です。

`published: false` やメニュー除外はアクセス制御ではありません。公開リポジトリに保存した内容は、ソースや履歴からも読める前提で扱います。

## このサイトの補足と公式資料

このガイドは、リポジトリの `_config.yml`、`_data/navigation.yml`、共通レイアウト、GitHub Actionsの公開設定に基づいています。`docs/` と `README.md` はサイトのビルド対象から除外されるため、このガイドは一般向けページやメニューには出力されません。リポジトリの閲覧権限がある人はGitHub上で読めます。

一般的なファイル作成、Front Matter、画像の配置方法は次の公式資料でも確認できます。

- [Jekyll 投稿の作成](https://jekyllrb.com/docs/posts/)
- [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/)
- [GitHub ファイルの新規作成](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files)
- [GitHub ファイルのアップロード](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Jekyll urlとbaseurlの設定](https://jekyllrb.com/docs/configuration/options/)
- [GitHub Pages 独自ドメインの設定](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

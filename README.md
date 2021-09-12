# E-SEA Official website

[![Netlify Status](https://api.netlify.com/api/v1/badges/b7c96688-15d1-4cd0-adec-372382f736bc/deploy-status)](https://app.netlify.com/sites/e-sea/deploys)

[e-sea 株式会社の Web ページです。](https://www.e-sea.blue/)

## 開発者向けドキュメント

### 必要環境

- [Node.js](https://nodejs.org/ja/) バージョン 16.9 以降

### セットアップ

```sh
git clone https://github.com/danmaq/e-sea.git
cd e-sea
npm install
```

### デバッグ

```sh
npm start
```

準備が整ったら [`http://localhost:3000`](http://localhost:3000) を開きます。

### ビルド＆プレビュー

```sh
npm run build
npm run serve
```

### 本番への配置

本番ページは Netlify 上で運用しています。このリポジトリの `master` ブランチへマージすることで、連動して自動的にビルド及び配置を行います。

## その他の注意

- コミット時におけるコミット メッセージの Linter を導入しています。
  ルールとして暫定的に
  **[Conventional Commits](https://www.conventionalcommits.org/ja/)**
  を適用しており、規約に反するメッセージのコミットを弾きます。

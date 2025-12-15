# カフェテンプレート

おしゃれなカフェのホームページテンプレートです。各店舗で簡単にカスタマイズできるよう設計されています。

## 特徴

- 🎨 洗練されたミニマルデザイン（カフェロブ風スタイル）
- 📱 レスポンシブ対応（モバイル・タブレット・デスクトップ）
- ⚙️ 設定ファイル一つで簡単にカスタマイズ可能
- 🖼️ 画像・動画の差し替えが簡単
- 🎬 動画背景サポート（ヒーローセクション）
- 🚀 Nuxt.js 3

## セットアップ

### 要件

- Node.js 20.19.0以上（または22.12.0以上）
- npm または yarn

nvmを使用している場合：
```bash
nvm use
```

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## サンプル画像について

現在、サンプル画像として **Unsplash** の無料画像を使用しています。これにより、すぐにサイトの見た目を確認できます。

### サンプル画像の確認

開発サーバーを起動すると、以下のサンプル画像が表示されます：

- **ヒーロー画像**: カフェの内装写真
- **ギャラリー**: カフェ、コーヒー、スイーツなどの写真（6枚）
- **メニュー**: コーヒーやスイーツの写真
- **アバウト**: カフェの雰囲気写真

### 実際の画像に差し替える方法

1. **画像を配置**
   - `public/images/` ディレクトリに画像を配置します

2. **設定ファイルを編集**
   - `config/store.ts` の `images` セクションでパスを変更します

```typescript
images: {
  hero: '/images/your-hero-image.jpg',  // ローカル画像に変更
  logo: '/images/your-logo.png',
  about: '/images/about-image.jpg',
  gallery: [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    // ...
  ],
  menu: [
    '/images/menu-1.jpg',
    '/images/menu-2.jpg',
    // ...
  ]
}
```

3. **メニューアイテムの画像**
   - 各メニューアイテムにも画像を設定できます

```typescript
menu: [
  {
    category: 'コーヒー',
    items: [
      {
        name: 'エスプレッソ',
        description: '深みのある味わいのエスプレッソ',
        price: '¥450',
        image: '/images/espresso.jpg'  // メニューアイテムの画像
      }
    ]
  }
]
```

## カスタマイズ方法

### 店舗情報の変更

`config/store.ts` ファイルを編集するだけで、店舗情報を変更できます。

```typescript
export const storeConfig: StoreConfig = {
  name: 'あなたのカフェ名',
  nameEn: 'Your Cafe Name',
  description: '店舗の説明文',
  tagline: 'キャッチコピー',
  address: '住所',
  phone: '電話番号',
  email: 'メールアドレス',
  // ... その他の設定
}
```

### 動画の設定（オプション）

1. `public/videos/` ディレクトリに動画を配置
2. `config/store.ts` の `videos` セクションでパスを指定

```typescript
videos: {
  hero: '/videos/hero-video.mp4', // ヒーローセクションの動画背景（オプション）
}
```

**注意**: 動画は自動再生されるため、サイズを最適化することをお勧めします。

### メニューの追加・編集

`config/store.ts` の `menu` 配列を編集してください。

```typescript
menu: [
  {
    category: 'カテゴリー名',
    items: [
      {
        name: 'メニュー名',
        description: '説明文',
        price: '¥価格',
        image: '/images/menu-image.jpg' // オプション
      }
    ]
  }
]
```

## プロジェクト構造

```
caffe-template/
├── config/
│   └── store.ts          # 店舗設定ファイル（ここを編集）
├── components/
│   ├── TheHeader.vue     # ヘッダー
│   ├── TheFooter.vue     # フッター
│   ├── HeroSection.vue   # ヒーローセクション（動画背景対応）
│   ├── ConceptSection.vue # コンセプトセクション
│   ├── MenuSection.vue   # メニューセクション（PRODUCT）
│   ├── GallerySection.vue # ギャラリーセクション
│   └── AccessSection.vue # アクセスセクション（CONTACT）
├── public/
│   ├── images/           # 画像を配置するディレクトリ
│   └── videos/           # 動画を配置するディレクトリ
├── layouts/
│   └── default.vue       # デフォルトレイアウト
├── pages/
│   └── index.vue         # トップページ
└── assets/
    └── css/
        └── main.css      # メインCSS
```

## ビルド

### 本番用ビルド

```bash
npm run build
```

### 静的サイト生成

```bash
npm run generate
```

## カスタマイズのポイント

### 色の変更

`assets/css/main.css` の `:root` セクションでカラーパレットを変更できます。

### コンポーネントのカスタマイズ

各コンポーネントは `components/` ディレクトリにあります。必要に応じて編集してください。

### レイアウトの変更

`layouts/default.vue` を編集することで、全体のレイアウトを変更できます。

## サンプル画像のライセンス

現在使用しているサンプル画像は **Unsplash** の無料画像です。Unsplashのライセンスに従って使用できます。

実際の運用時は、ご自身の画像に差し替えることをお勧めします。

## ライセンス

このテンプレートは自由に使用・改変できます。

## サポート

質問や問題がある場合は、お気軽にお問い合わせください。

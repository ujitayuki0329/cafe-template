# 設定ファイルについて

## store.ts

このファイルが店舗情報の中心です。各店舗で横展開する際は、このファイルを編集するだけで簡単にカスタマイズできます。

### 編集方法

1. **基本情報**
   - `name`: 店舗名
   - `nameEn`: 店舗名（英語）
   - `description`: 店舗の説明文
   - `tagline`: キャッチコピー

2. **連絡先**
   - `address`: 住所
   - `phone`: 電話番号
   - `email`: メールアドレス

3. **営業時間**
   - `hours.weekdays`: 平日の営業時間
   - `hours.weekend`: 週末の営業時間
   - `hours.closed`: 定休日（配列）

4. **ソーシャルメディア**
   - `social.instagram`: InstagramのURL（オプション）
   - `social.facebook`: FacebookのURL（オプション）
   - `social.twitter`: TwitterのURL（オプション）

5. **画像パス**
   - `images.hero`: ヒーローセクションの画像
   - `images.logo`: ロゴ画像
   - `images.about`: アバウトセクションの画像
   - `images.gallery`: ギャラリー画像（配列）
   - `images.menu`: メニュー画像（配列）

6. **メニュー**
   - `menu`: メニューカテゴリーとアイテムの配列
   - 各アイテムには `name`, `description`, `price`, `image`（オプション）を設定

7. **特徴**
   - `features`: 店舗の特徴を表示（配列）
   - 各特徴には `title`, `description`, `icon` を設定

### 画像の配置

画像は `public/images/` ディレクトリに配置し、パスは `/images/ファイル名` の形式で指定してください。

例：
- `public/images/hero.jpg` → `/images/hero.jpg`
- `public/images/gallery/photo1.jpg` → `/images/gallery/photo1.jpg`



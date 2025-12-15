/**
 * 店舗設定ファイル
 * 各店舗でこのファイルを編集するだけで、ホームページの内容を変更できます
 */

export interface StoreConfig {
  // 基本情報
  name: string
  nameEn: string
  description: string
  tagline: string
  
  // 連絡先
  address: string
  phone: string
  email: string
  
  // 営業時間
  hours: {
    weekdays: string
    weekend: string
    closed: string[]
  }
  
  // ソーシャルメディア
  social: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
  
  // 画像パス（各店舗で差し替え可能）
  images: {
    hero: string // ヒーロー画像
    heroVideo?: string // ヒーロー動画（オプション）
    logo: string // ロゴ
    about: string // アバウトセクション用
    gallery: string[] // ギャラリー画像（配列）
    menu: string[] // メニュー画像（配列）
  }
  
  // 動画パス（オプション）
  videos?: {
    hero?: string // ヒーロー動画
    concept?: string[] // コンセプト動画（配列）
  }
  
  // メニュー情報
  menu: {
    category: string
    items: {
      name: string
      description: string
      price: string
      image?: string
    }[]
  }[]
  
  // 特徴・コンセプト
  features: {
    title: string
    description: string
    icon: string
  }[]
}

// デフォルト設定（サンプル）
export const storeConfig: StoreConfig = {
  name: 'カフェテンプレート',
  nameEn: 'Cafe Template',
  description: '心と体にたくさんの栄養をお届けするカフェ＆ダイニング。',
  tagline: '扉を開ければ忙しい日常から解放され、ゆっくりお過ごしいただけます。',
  
  address: '東京都渋谷区〇〇1-2-3',
  phone: '03-1234-5678',
  email: 'info@cafe-template.com',
  
  hours: {
    weekdays: '11:00～21:00 (L.O. 20:00)',
    weekend: '11:00～19:00 (L.O. 18:00)',
    closed: ['日・祝']
  },
  
  social: {
    instagram: 'https://instagram.com/cafe-template',
    facebook: 'https://facebook.com/cafe-template',
    twitter: 'https://twitter.com/cafe-template'
  },
  
  images: {
    // サンプル画像（Unsplashの無料画像を使用）
    // 実際の運用時は public/images/ ディレクトリに画像を配置して、パスを変更してください
    hero: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop&q=80',
    heroVideo: undefined, // 動画を使用する場合はここにパスを指定
    logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop&q=80', // カフェ内装
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=800&fit=crop&q=80', // コーヒー
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=800&fit=crop&q=80', // カフェ
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=800&fit=crop&q=80', // コーヒー豆
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=800&fit=crop&q=80', // カフェ内装
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop&q=80'  // コーヒー
    ],
    menu: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&q=80'
    ]
  },
  
  // 動画パス（オプション）
  // サンプル動画としてPexelsの無料動画を使用
  // 実際の運用時は public/videos/ ディレクトリに動画を配置して、パスを変更してください
  videos: {
    // hero: 'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4', // ヒーロー動画（オプション）
    // concept: [
    //   'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4',
    //   'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4'
    // ]
  },
  
  menu: [
    {
      category: 'コーヒー',
      items: [
        {
          name: 'エスプレッソ',
          description: '深みのある味わいのエスプレッソ',
          price: '¥450',
          image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&q=80'
        },
        {
          name: 'カフェラテ',
          description: 'まろやかなミルクとコーヒーのハーモニー',
          price: '¥550',
          image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop&q=80'
        },
        {
          name: 'カプチーノ',
          description: 'ふわふわのフォームが特徴',
          price: '¥550',
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&q=80'
        }
      ]
    },
    {
      category: 'スイーツ',
      items: [
        {
          name: 'チーズケーキ',
          description: '濃厚でクリーミーなチーズケーキ',
          price: '¥650',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop&q=80'
        },
        {
          name: 'パンケーキ',
          description: 'ふわふわのパンケーキ',
          price: '¥750',
          image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop&q=80'
        }
      ]
    }
  ],
  
  features: [
    {
      title: '食材にこだわった手作り',
      description: '加工品は使わず、手間ひまかけたお料理は、カラダを元気にしてくれます。',
      icon: '🥗'
    },
    {
      title: 'ヘルシーなメニュー',
      description: '野菜をたくさん食べることができるように、油を減らしカロリーを抑えたメニューをご用意しています。',
      icon: '🌿'
    },
    {
      title: 'くつろぎの空間',
      description: 'ゆったりと過ごせる、居心地の良い空間で、あなただけの時間をお過ごしください。',
      icon: '🪑'
    }
  ]
}

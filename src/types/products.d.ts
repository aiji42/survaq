interface Image {
  url: string
  height: number
  width: number
}

export interface Images {
  logo: Image
  favicon: Image
}

export interface Meta {
  title: string
  description: string
  copyright?: string
  ogUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogType?: [string]
  ogSiteName?: string
  ogImage?: Image
  fbAppId?: string
  twitterCard?: [string]
  twitterSite?: string
}

export interface ShortCode {
  code: string
  body: string
}

type ShortCodes = Array<ShortCode>

export interface SocialLinks {
  facebook?: string
  twitter?: string
  hatena?: string
  line?: string
}

export interface Product {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  shortCodes?: ShortCodes
  images: Images
  meta: Meta
  socialLinks: SocialLinks
}
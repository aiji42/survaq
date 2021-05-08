interface Image {
  url: string
  height: number
  width: number
}

export interface Meta {
  copyright: string
  description: string
  title: string
}

export interface Item {
  image?: Image
  title?: string
  text?: string
  url?: string
}

export interface Company {
  data: string
  embeddedMap: string
}

export interface Top {
  header: Item
  mission: Item
  bussinesses: Array<Item>
  products: Array<Item>
  company: Company
  meta: Meta
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

import { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '@/libs/microCms'
import { FC } from 'react'
import { Product } from '@/types/products'
import { Post } from '@/components/Post'
import { SnsButtons } from '@/components/SnsButtons'
import { ProductHead } from '@/components/ProductHead'
import Image from 'next/image'
import { Footer } from '@/components/Footer'

export interface ProductProps {
  data: Product
}

const Products: FC<ProductProps> = ({ data }) => {
  return (
    <div className="w-full bg-gray-50 text-gray-700">
      <ProductHead {...data} />
      <header className="py-2 sticky top-0 bg-white shadow-sm">
        <div className="w-28 h-9 relative mx-auto">
          <Image
            src={data.images.logo.url}
            layout="fill"
            objectFit="contain"
            alt="ロゴ"
            priority
          />
        </div>
      </header>
      <div className="max-w-3xl mx-auto pt-2 md:pt-5">
        <div className="px-2">
          <h1 className="font-bold text-3xl md:text-4xl whitespace-pre-wrap text-gray-800">
            {data.title}
          </h1>
        </div>
        <div className="flex py-8 px-2">
          <div className="hidden md:block mr-10">
            <div className="sticky top-20">
              <SnsButtons {...data} />
            </div>
          </div>
          <Post {...data} />
        </div>
      </div>
      <Footer copyright={data.meta.copyright} />
      <div className="md:hidden sticky bottom-0 py-2 w-full bg-gray-100">
        <SnsButtons {...data} flex />
      </div>
    </div>
  )
}

export default Products

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.get<{ contents: Array<Product> }>({
    endpoint: 'products',
    queries: { fields: 'id', limit: 999 }
  })

  return {
    paths: data?.contents.map((params) => ({ params })) ?? [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  try {
    const data = await client.get<Product>({
      endpoint: 'products',
      contentId: params?.id ?? ''
    })

    replaceBody(data)

    return {
      props: {
        data
      },
      revalidate: 5
    }
  } catch (e) {
    console.log(e)
    return {
      notFound: true
    }
  }
}

export const replaceBody = (data: Product) => {
  data.shortCodes?.forEach(({ code, body }) => {
    data.body = data.body.replace(
      new RegExp(`&lt;&lt;${code}&gt;&gt;`, 'g'),
      body
    )
  })
  data.body = data.body.replace(/\<img src=/g, () => {
    return '<img loading="lazy" src='
  })

  return data
}

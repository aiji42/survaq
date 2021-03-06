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
      <header className="py-2 sticky top-0 bg-white shadow-sm z-10">
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
      {data.script && (
        <script
          dangerouslySetInnerHTML={{
            __html: data.script
          }}
        />
      )}
    </div>
  )
}

export default Products

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<Product>({
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
  { id: string },
  { draftKey: string }
> = async ({ params, previewData }) => {
  try {
    const data = await client.getListDetail<Product>({
      endpoint: 'products',
      contentId: params?.id ?? '',
      queries: previewData?.draftKey
        ? { draftKey: previewData.draftKey }
        : undefined
    })

    return {
      props: {
        data: {
          ...data,
          body: replaceBody(data)
        }
      },
      revalidate: 60 ** 2 * 24 * 31
    }
  } catch (e) {
    console.log(e)
    return {
      notFound: true
    }
  }
}

export const replaceBody = ({ body, shortCodes }: Product): string => {
  const shortCodesMap =
    shortCodes?.reduce<Record<string, string>>(
      (res, { code, body }) => ({ ...res, [code]: body }),
      {}
    ) ?? {}
  return body.replace(
    /&lt;&lt;(.+?)&gt;&gt;/g,
    (...[, key]) => shortCodesMap[key]
  )
}

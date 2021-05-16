import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { FC, useEffect, useState } from 'react'
import { Product } from '../../types/products'
import { Post } from '../../components/Post'
import { SnsButtons } from '../../components/SnsButtons'
import { ProductHead } from '../../components/ProductHead'
import Image from 'next/image'

interface ProductProps {
  data: Product | null
}

const Products: FC<ProductProps> = ({ data: serverSideData }) => {
  const [data, setData] = useState<ProductProps['data'] | null>(serverSideData)
  // const router = useRouter()
  // useEffect(() => {
  //   if (!router.query.preview) return
  //   fetch(`/api/preview?draftKey=${router.query.preview}`)
  //     .then((res) => res.json())
  //     .then(setData)
  //     .catch(() => null)
  // }, [router])

  if (!data) return null
  return (
    <div className="w-full bg-gray-50">
      <ProductHead {...data} />
      <header className="py-4 sticky top-0 bg-white shadow-sm">
        <div className="w-28 h-9 relative mx-auto">
          <Image
            src={data.images.logo.url ?? ''}
            layout="fill"
            objectFit="contain"
            alt="ロゴ"
            priority
          />
        </div>
      </header>
      <div className="max-w-3xl mx-auto pt-2 md:pt-5">
        <div className="px-2">
          <h1 className="font-bold text-3xl md:text-4xl whitespace-pre-wrap">
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
      <footer className="p-4 mx-auto max-w-3xl text-center text-gray-500">
        <ul className="flex justify-evenly flex-wrap">
          <li>
            <a href="/#company">会社情報</a>
          </li>
          <li>
            <a href="/">コーポレートサイト</a>
          </li>
          <li>お問合せ</li>
        </ul>
        <p className="pt-4">{data.meta.copyright}</p>
      </footer>
      <div className="md:hidden sticky bottom-0 py-2 w-full bg-gray-100">
        <SnsButtons {...data} flex />
      </div>
    </div>
  )
}

export default Products

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  const data: null | Product = await fetch(
    `${process.env.MICRO_CMS_API_ENDPOINT}/products/${params?.id}`,
    {
      headers: { 'X-API-KEY': process.env.MICRO_CMS_API_KEY ?? '' }
    }
  )
    .then((res) => res.json())
    .catch(() => null)

  data?.shortCodes?.forEach(({ code, body }) => {
    data.body = data.body.replace(
      new RegExp(`&lt;&lt;${code}&gt;&gt;`, 'g'),
      body
    )
  })

  return {
    props: {
      data
    },
    revalidate: 5
  }
}

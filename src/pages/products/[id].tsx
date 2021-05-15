import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { FC, useEffect, useState } from 'react'
import { Product } from '../../types/products'
import { Post } from '../../components/Post'
import { SnsButtons } from '../../components/SnsButtons'
import { ProductHead } from '../../components/ProductHead'

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
    <>
      <ProductHead {...data} />
      <div className="max-w-3xl mx-auto pt-4 md:pt-10">
        <div className="px-2">
          <h1 className="font-bold text-3xl md:text-4xl whitespace-pre-wrap">
            {data.title}
          </h1>
        </div>
        <div className="flex py-8 px-2">
          <div className="hidden md:block mr-10">
            <div className="sticky top-10">
              <SnsButtons {...data} />
            </div>
          </div>
          <Post {...data} />
        </div>
      </div>
      <div className="md:hidden sticky bottom-0 py-2 w-full bg-gray-100">
        <SnsButtons {...data} flex />
      </div>
    </>
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

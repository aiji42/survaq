import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { Product } from '../../types/products'
import { Post } from '../../components/Post'

interface ProductProps {
  data: Product
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
      <Head>
        <title>{data.meta.title}</title>
        <link rel="icon" href={data.images.favicon.url} />
        <meta name="description" content={data.meta.description} />
        <meta
          property="og:title"
          content={data.meta.ogTitle ?? data.meta.title}
        />
        <meta
          property="og:description"
          content={data.meta.ogDescription ?? data.meta.description}
        />
        {data.meta.ogType && (
          <meta property="og:type" content={data.meta.ogType[0]} />
        )}
        {data.meta.ogUrl && (
          <meta property="og:url" content={data.meta.ogUrl} />
        )}
        {data.meta.ogSiteName && (
          <meta property="og:site_name" content={data.meta.ogSiteName} />
        )}
        {data.meta.ogImage && (
          <meta property="og:image" content={data.meta.ogImage.url} />
        )}
        {data.meta.fbAppId && (
          <meta property="fb:app_id" content={data.meta.fbAppId} />
        )}
        {data.meta.twitterCard && (
          <meta name="twitter:card" content={data.meta.twitterCard[0]} />
        )}
        {data.meta.twitterSite && (
          <meta name="twitter:site" content={data.meta.twitterSite} />
        )}
      </Head>
      <div className="max-w-3xl mx-auto px-2 relative">
        <div className="flex md:justify-between">
          <div className="w-80 mt-10">
            <ul className="sticky top-32">
              <li className="mb-5">
                <img
                  src="https://survaq.com/assets/eyecamera/F.webp"
                  alt="Twitter"
                />
              </li>
              <li className="mb-5">
                <img
                  src="https://survaq.com/assets/eyecamera/T.png"
                  alt="Twitter"
                />
              </li>
              <li className="mb-5">
                <img
                  src="https://survaq.com/assets/eyecamera/B.png"
                  alt="Twitter"
                />
              </li>
              <li className="mb-5">
                <img
                  src="https://survaq.com/assets/eyecamera/L.png"
                  alt="Twitter"
                />
              </li>
            </ul>
          </div>
          <div className="md:ml-20"></div>
          <Post body={data.body} />
        </div>
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

export const getStaticProps: GetStaticProps<ProductProps, { id: string }> = async ({ params }) => {
  const data = await fetch(`${process.env.MICRO_CMS_API_ENDPOINT}/products/${params?.id}`, {
    headers: { 'X-API-KEY': process.env.MICRO_CMS_API_KEY ?? '' }
  })
    .then((res) => res.json())
    .catch(() => null)

  return {
    props: {
      data
    },
    revalidate: 5
  }
}

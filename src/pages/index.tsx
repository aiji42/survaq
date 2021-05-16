import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { FC, useEffect, useState } from 'react'
import { Top as TopType } from '../types/top'
import Head from 'next/head'
import { Mission } from '../components/Mission'
import { Bussiness } from '../components/Bussiness'
import { Products } from '../components/Products'
import { Company } from '../components/Company'
import { TopPageHeader } from '../components/TopPageHeader'
import { Footer } from '../components/Footer'

interface TopProps {
  data: TopType
}

const Top: FC<TopProps> = ({ data: serverSideData }) => {
  const [data, setData] = useState(serverSideData)
  const router = useRouter()
  useEffect(() => {
    if (!router.query.preview) return
    fetch(`/api/preview/top?draftKey=${router.query.preview}`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => null)
  }, [router])

  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <link rel="icon" href={data.images.favicon.url} />
        <meta name="description" content={data.meta.description} />
      </Head>
      <div>
        <TopPageHeader {...data} />
        <Mission {...data} />
        <Bussiness {...data} />
        <Products {...data} />
        <Company {...data} />
        <Footer copyright={data.meta.copyright} />
      </div>
    </>
  )
}

export default Top

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  const data = await fetch(`${process.env.MICRO_CMS_API_ENDPOINT}/top`, {
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

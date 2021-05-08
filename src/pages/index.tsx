import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { FC, useEffect, useState } from 'react'
import { Top as TopType } from '../types/top'
import Head from 'next/head'

interface TopProps {
  data: TopType
}

const Top: FC<TopProps> = ({ data: serverSideData }) => {
  const [data, setData] = useState(serverSideData)
  const router = useRouter()
  useEffect(() => {
    if (!router.query.preview) return
    fetch(`/api/preview?draftKey=${router.query.preview}`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => null)
  }, [router])

  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
      </Head>
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
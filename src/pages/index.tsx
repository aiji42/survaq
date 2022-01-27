import { GetStaticProps } from 'next'
import { client } from '@/libs/microCms'
import { FC } from 'react'
import { Top as TopType } from '@/types/top'
import Head from 'next/head'
import { Mission } from '@/components/Mission'
import { Bussiness } from '@/components/Bussiness'
import { Products } from '@/components/Products'
import { Company } from '@/components/Company'
import { TopPageHeader } from '@/components/TopPageHeader'
import { Footer } from '@/components/Footer'

export interface TopProps {
  data: TopType
}

const Top: FC<TopProps> = ({ data }) => {
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
  try {
    const data = await client.get<TopType>({
      endpoint: 'top'
    })

    return {
      props: {
        data
      },
      revalidate: 60
    }
  } catch (e) {
    console.log(e)
    return {
      notFound: true
    }
  }
}

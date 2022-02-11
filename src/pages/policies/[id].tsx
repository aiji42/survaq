import { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '@/libs/microCms'
import { FC } from 'react'
import { Post } from '@/components/Post'
import { Policy } from '@/types/policies'
import { Top } from '@/types/top'
import { TopPageHeader } from '@/components/TopPageHeader'
import { Footer } from '@/components/Footer'
import Head from 'next/head'

export interface PoliciesProps {
  main: Policy
  sub: Top
}

const Policies: FC<PoliciesProps> = ({ main, sub }) => {
  return (
    <>
      <Head>
        <title>
          {main.title} | {sub.meta.title}
        </title>
        <link rel="icon" href={sub.images.favicon.url} />
        <meta name="description" content={sub.meta.description} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="w-full bg-gray-50 text-gray-700">
        <TopPageHeader {...sub} header={{ ...sub.header, text: main.title }} />
        <main className="max-w-3xl mx-auto py-2 md:py-5">
          <div className="p-4 md:px-2">
            <Post {...main} />
          </div>
        </main>
        <Footer copyright={sub.meta.copyright} />
      </div>
    </>
  )
}

export default Policies

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<Policy>({
    endpoint: 'policies',
    queries: { fields: 'id', limit: 999 }
  })

  return {
    paths: data.contents.map((params) => ({ params })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<
  PoliciesProps,
  { id: string }
> = async ({ params }) => {
  try {
    const main = client.getListDetail<Policy>({
      endpoint: 'policies',
      contentId: params?.id ?? ''
    })
    const sub = client.getObject<Top>({ endpoint: 'top' })

    return {
      props: {
        main: await main,
        sub: await sub
      },
      revalidate: 60 ** 2 * 24
    }
  } catch (e) {
    console.log(e)
    return {
      notFound: true
    }
  }
}

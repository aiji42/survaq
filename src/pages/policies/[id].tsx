import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { FC, useEffect, useState } from 'react'
import { Post } from '../../components/Post'
import { Policy } from '../../types/policies'
import { Top } from '../../types/top'
import { TopPageHeader } from '../../components/TopPageHeader'
import { Footer } from '../../components/Footer'
import Head from 'next/head'

interface PoliciesProps {
  main: Policy | null
  sub: Top | null
}

const Policies: FC<PoliciesProps> = ({
  main: serverSideMain,
  sub: serverSideSub
}) => {
  const [data, setData] = useState<PoliciesProps>({
    main: serverSideMain,
    sub: serverSideSub
  })
  const router = useRouter()
  useEffect(() => {
    if (!router.query.preview) return
    fetch(
      `/api/preview/policies/${router.query.id}?draftKey=${router.query.preview}`
    )
      .then((res) => res.json())
      .then((main) => setData((prev) => ({ ...prev, main })))
      .catch(() => null)
    fetch(`/api/preview/top?draftKey=${router.query.preview}`)
      .then((res) => res.json())
      .then((sub) => setData((prev) => ({ ...prev, sub })))
      .catch(() => null)
  }, [router])

  if (!data.main || !data.sub) return null
  return (
    <>
      <Head>
        <title>
          {data.main.title} | {data.sub.meta.title}
        </title>
        <link rel="icon" href={data.sub.images.favicon.url} />
        <meta name="description" content={data.sub.meta.description} />
      </Head>
      <div className="w-full bg-gray-50 text-gray-700">
        <TopPageHeader
          {...data.sub}
          header={{ ...data.sub.header, text: data.main.title }}
        />
        <main className="max-w-3xl mx-auto py-2 md:py-5">
          <div className="p-4 md:px-2">
            <Post {...data.main} />
          </div>
        </main>
        <Footer copyright={data.sub.meta.copyright} />
      </div>
    </>
  )
}

export default Policies

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data: null | { contents: Array<{ id: string }> } = await fetch(
    `${process.env.MICRO_CMS_API_ENDPOINT}/policies?fields=id&limit=999`,
    {
      headers: { 'X-API-KEY': process.env.MICRO_CMS_API_KEY ?? '' }
    }
  )
    .then((res) => res.json())
    .catch(() => null)

  return {
    paths: data?.contents.map((params) => ({ params })) ?? [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<PoliciesProps, { id: string }> =
  async ({ params }) => {
    const main: null | Policy = await fetch(
      `${process.env.MICRO_CMS_API_ENDPOINT}/policies/${params?.id}`,
      {
        headers: { 'X-API-KEY': process.env.MICRO_CMS_API_KEY ?? '' }
      }
    )
      .then((res) => res.json())
      .catch(() => null)

    const sub: null | Top = await fetch(
      `${process.env.MICRO_CMS_API_ENDPOINT}/top`,
      {
        headers: { 'X-API-KEY': process.env.MICRO_CMS_API_KEY ?? '' }
      }
    )
      .then((res) => res.json())
      .catch(() => null)

    return {
      props: {
        main,
        sub
      },
      revalidate: 5
    }
  }

import { GetStaticProps } from 'next'
import { FC } from 'react'

const Top: FC = () => {
  return null
}

export default Top

export const getStaticProps: GetStaticProps = async () => {
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
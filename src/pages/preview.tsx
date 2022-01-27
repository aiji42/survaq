import { client } from '@/libs/microCms'
import { GetServerSideProps } from 'next'
import { FC } from 'react'
import Top, { TopProps } from './'
import { Top as TopType } from '@/types/top'

const Preview: FC<TopProps> = (props) => {
  return <Top {...props} />
}

export default Preview

export const getServerSideProps: GetServerSideProps<TopProps> = async ({ query }) => {
  const { draftKey } = query
  if (typeof draftKey !== 'string')
    return {
      notFound: true
    }

  const data = await client.getObject<TopType>({
    endpoint: 'top',
    queries: { draftKey: draftKey }
  })

  return {
    props: {
      data
    }
  }
}

import { client } from '@/libs/microCms'
import { GetServerSideProps } from 'next'
import { FC } from 'react'
import { Policy } from '@/types/policies'
import { Top } from '@/types/top'
import Policies, { PoliciesProps } from './[id]'

const Preview: FC<PoliciesProps> = (props) => {
  return <Policies {...props} />
}

export default Preview

export const getServerSideProps: GetServerSideProps<PoliciesProps> = async ({
  query
}) => {
  const { contentId, draftKey } = query
  if (typeof contentId !== 'string' || typeof draftKey !== 'string')
    return {
      notFound: true
    }

  const main = client.getListDetail<Policy>({
    endpoint: 'policies',
    contentId: contentId,
    queries: { draftKey: draftKey }
  })
  const sub = client.getObject<Top>({ endpoint: 'top' })

  return {
    props: {
      main: await main,
      sub: await sub
    }
  }
}

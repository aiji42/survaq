import { client } from '@/libs/microCms'
import { GetServerSideProps } from 'next'
import { FC } from 'react'
import Products, { ProductProps, replaceBody } from './[id]'
import { Product } from '@/types/products'

const Preview: FC<ProductProps> = (props) => {
  return <Products {...props} />
}

export default Preview

export const getServerSideProps: GetServerSideProps<ProductProps> = async ({
 query
}) => {
  const { contentId, draftKey } = query
  if (typeof contentId !== 'string' || typeof draftKey !== 'string')
    return {
      notFound: true
    }

  const data = await client.getListDetail<Product>({
    endpoint: 'products',
    contentId: contentId,
    queries: { draftKey: draftKey }
  })

  return {
    props: {
      data: {
        ...data,
        body: replaceBody(data)
      }
    }
  }
}
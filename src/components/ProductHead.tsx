import Head from 'next/head'
import { FC } from 'react'
import { Images, Meta } from '@/types/products'

export const ProductHead: FC<{ meta: Meta; images: Images }> = ({
  meta,
  images
}) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <link rel="icon" href={images.favicon.url} />
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.ogTitle ?? meta.title} />
      <meta
        property="og:description"
        content={meta.ogDescription ?? meta.description}
      />
      {meta.ogType && <meta property="og:type" content={meta.ogType[0]} />}
      {meta.ogUrl && <meta property="og:url" content={meta.ogUrl} />}
      {meta.ogSiteName && (
        <meta property="og:site_name" content={meta.ogSiteName} />
      )}
      {meta.ogImage && <meta property="og:image" content={meta.ogImage.url} />}
      {meta.fbAppId && <meta property="fb:app_id" content={meta.fbAppId} />}
      {meta.twitterCard && (
        <meta name="twitter:card" content={meta.twitterCard[0]} />
      )}
      {meta.twitterSite && (
        <meta name="twitter:site" content={meta.twitterSite} />
      )}
    </Head>
  )
}

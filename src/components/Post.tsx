import { FC } from 'react'
import style from '../styles/post.module.scss'
import parse, { DOMNode } from 'html-react-parser'
import { Element } from 'domhandler/lib/node'
import Image from 'next/image'

const replace = (domNode: DOMNode) => {
  if (!(domNode instanceof Element) || domNode.name !== 'img') return
  if (domNode.attribs.width && domNode.attribs.height)
    return (
      <Image
        src={domNode.attribs.src}
        alt={domNode.attribs.alt}
        width={domNode.attribs.width}
        height={domNode.attribs.height}
      />
    )
  else domNode.attribs.loading = 'lazy'
}

export const Post: FC<{ body: string }> = ({ body }) => {
  return <div className={style.root}>{parse(body, { replace })}</div>
}

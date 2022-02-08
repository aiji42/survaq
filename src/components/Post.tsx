import { FC } from 'react'
import style from '../styles/post.module.scss'
import parse, { DOMNode, domToReact } from 'html-react-parser'
import { Element } from 'domhandler/lib/node'
import Image from 'next/image'
import styleToObject from 'style-to-object'

const replace = (domNode: DOMNode) => {
  if (!(domNode instanceof Element)) return
  if (domNode.attribs.onclick) {
    const { onclick, style, ...rest } = domNode.attribs
    const newFunction = new Function(onclick)
    return (
      <>
        {/* @ts-ignore */}
        <domNode.name
          onClick={newFunction}
          style={styleToObject(style) ?? {}}
          {...rest}
        >
          {domNode.children.length > 0
            ? domToReact(domNode.children, { replace })
            : undefined}
        </domNode.name>
      </>
    )
  }
  if (domNode.name === 'img') {
    if (domNode.attribs.width && domNode.attribs.height)
      if (domNode.attribs.style)
        return (
          <div style={styleToObject(domNode.attribs.style) ?? {}}>
            <Image
              src={domNode.attribs.src}
              alt={domNode.attribs.alt}
              width={domNode.attribs.width}
              height={domNode.attribs.height}
            />
          </div>
        )
      else
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
}

export const Post: FC<{ body: string }> = ({ body }) => {
  return <div className={style.root}>{parse(body, { replace })}</div>
}

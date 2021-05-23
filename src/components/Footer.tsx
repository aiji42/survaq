import { FC } from 'react'
import { Top } from '../types/top'

export const Footer: FC<Top> = ({ meta }) => {
  return (
    <footer className="border-t p-4 md:p-8 mx-auto text-center text-gray-500">
      <ul className="max-w-3xl mx-auto flex justify-evenly flex-wrap">
        <li>
          <a href="/#company">会社情報</a>
        </li>
        <li>
          <a href="/policies/privacy">プライバシーポリシー</a>
        </li>
        <li>
          <a href="mailto:support@survaq.com">お問合せ</a>
        </li>
      </ul>
      <p className="pt-4">{meta.copyright}</p>
    </footer>
  )
}

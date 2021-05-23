import { FC } from 'react'

export const Footer: FC<{ copyright?: string }> = ({ copyright }) => {
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
      {copyright && <p className="pt-4">{copyright}</p>}
    </footer>
  )
}

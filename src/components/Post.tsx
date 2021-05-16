import { FC } from 'react'
import style from '../styles/post.module.scss'

export const Post: FC<{ body: string }> = ({
  body
}) => {
  return (
    <div className="text-gray-700">
      <div className={style.root} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  )
}

import { FC } from 'react'

export const Footer: FC<{ copyright: string }> = ({ copyright }) => {
  return (
    <footer className="border-t">
      <div className="py-8 text-center">
        <p className="text-gray-500">{copyright}</p>
      </div>
    </footer>
  )
}

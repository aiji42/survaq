import { FC } from 'react'
import { SocialLinks } from '@/types/products'

export const SnsButtons: FC<{ socialLinks: SocialLinks; flex?: boolean }> = ({
  socialLinks,
  flex = false
}) => {
  return (
    <ul className={flex ? 'flex justify-evenly' : ''}>
      {socialLinks.facebook && (
        <li className={flex ? 'w-12' : 'w-12 mb-6'}>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
        </li>
      )}
      {socialLinks.twitter && (
        <li className={flex ? 'w-12' : 'w-12 mb-6'}>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.png" alt="Twitter" />
          </a>
        </li>
      )}
      {socialLinks.hatena && (
        <li className={flex ? 'w-12' : 'w-12 mb-6'}>
          <a
            href={socialLinks.hatena}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/hatena.png" alt="HatenaBookmark" />
          </a>
        </li>
      )}
      {socialLinks.line && (
        <li className={flex ? 'w-12' : 'w-12 mb-6'}>
          <a href={socialLinks.line} target="_blank" rel="noopener noreferrer">
            <img src="/line.png" alt="Line" />
          </a>
        </li>
      )}
    </ul>
  )
}

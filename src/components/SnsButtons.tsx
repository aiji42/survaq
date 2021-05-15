import { FC } from 'react'
import { SocialLinks } from '../types/products'

export const SnsButtons: FC<{ socialLinks: SocialLinks }> = ({
  socialLinks
}) => {
  return (
    <ul>
      {socialLinks.facebook && (
        <li className="w-12 mb-4">
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/facebook.png"
              alt="Facebook"
            />
          </a>
        </li>
      )}
      {socialLinks.twitter && (
        <li className="w-12 mb-4">
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/twitter.png"
              alt="Twitter"
            />
          </a>
        </li>
      )}
      {socialLinks.hatena && (
        <li className="w-12 mb-4">
          <a
            href={socialLinks.hatena}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/hatena.png"
              alt="HatenaBookmark"
            />
          </a>
        </li>
      )}
      {socialLinks.line && (
        <li className="w-12 mb-4">
          <a href={socialLinks.line} target="_blank" rel="noopener noreferrer">
            <img
              src="/line.png"
              alt="Line"
            />
          </a>
        </li>
      )}
    </ul>
  )
}

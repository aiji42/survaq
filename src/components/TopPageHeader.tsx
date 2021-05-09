import { FC, useState } from 'react'
import { Top } from '../types/top'
import Image from 'next/image'

export const TopPageHeader: FC<Top> = ({ header }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.png"
            width={82.5}
            height={25}
            alt="survaq"
            priority
          />
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 md:hidden"
            aria-label="toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col mt-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0`}
        >
          <a
            className="text-sm font-medium text-gray-400 transition-colors duration-300 transform hover:text-red-400"
            href="#mission"
          >
            Mission
          </a>
          <a
            className="text-sm font-medium text-gray-400 transition-colors duration-300 transform hover:text-red-400"
            href="#bussiness"
          >
            Bussiness
          </a>
          <a
            className="text-sm font-medium text-gray-400 transition-colors duration-300 transform hover:text-red-400"
            href="#products"
          >
            Products
          </a>
          <a
            className="text-sm font-medium text-gray-400 transition-colors duration-300 transform hover:text-red-400"
            href="#company"
          >
            Company
          </a>
        </div>
      </nav>

      <section className="flex relative items-center" style={{ height: 250 }}>
        <div className="text-center">
          <div className="opacity-40">
            {header.image && (
              <Image
                src={header.image.url}
                layout="fill"
                objectFit="cover"
                alt="main visual"
                priority
              />
            )}
          </div>
          <div
            className="absolute w-full"
            style={{ transform: 'translateY(-50%)' }}
          >
            <h1 className="text-3xl md:text-5xl font-title font-bold tracking-wide text-gray-800 whitespace-pre-wrap">
              {header.text}
            </h1>
          </div>
        </div>
      </section>
    </header>
  )
}

import { FC } from 'react'
import { Top } from '../types/top'
import Image from 'next/image'

export const Bussiness: FC<Top> = ({ bussinesses }) => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h2
          className="text-3xl text-gray-800 tracking-wide font-title"
          id="bussiness"
        >
          Bussiness
        </h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {bussinesses.map((item, index) =>
            item.url ? (
              <a
                href={item.url}
                key={index}
                className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md hover:shadow-lg"
              >
                {item.image && (
                  <div className="mb-8 px-8">
                    <Image
                      src={item.image.url}
                      height={item.image.height}
                      width={item.image.width}
                      alt={item.title}
                    />
                  </div>
                )}
                <h3 className="text-lg text-gray-600">{item.title}</h3>
              </a>
            ) : (
              <div
                key={index}
                className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md"
              >
                {item.image && (
                  <div className="mb-8 px-8">
                    <Image
                      src={item.image.url}
                      height={item.image.height}
                      width={item.image.width}
                      alt={item.title}
                    />
                  </div>
                )}
                <h3 className="text-lg text-gray-600">{item.title}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

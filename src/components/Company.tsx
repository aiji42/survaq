import { FC } from 'react'
import { Top } from '../types/top'

export const Company: FC<Top> = ({ company }) => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h2
          className="text-3xl text-gray-800 underline tracking-wide font-title"
          id="company"
        >
          Company
        </h2>
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/3">
              <div
                className="max-w-md mt-4 text-left text-gray-500"
                dangerouslySetInnerHTML={{ __html: company.data }}
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3">
              <div className="flex items-center justify-center">
                <iframe
                  src={company.embeddedMap}
                  allowFullScreen
                  loading="lazy"
                  title="survaq address"
                  className="w-full h-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

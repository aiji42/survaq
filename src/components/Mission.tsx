import { FC } from 'react'
import { Top } from '../types/top'

export const Mission: FC<Top> = ({ mission }) => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h2
          className="text-3xl font-semibold text-gray-800 underline"
          id="mission"
        >
          Mission
        </h2>
        <p className="max-w-full mx-auto mt-4 leading-relaxed text-gray-500 whitespace-pre-wrap">
          {mission.text}
        </p>
      </div>
    </section>
  )
}

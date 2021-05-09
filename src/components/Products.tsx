import { FC } from "react";
import { Top } from "../types/top";
import Image from 'next/image';

export const Products: FC<Top> = ({ products }) => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h2
          className="text-3xl font-semibold text-gray-800 underline"
          id="products"
        >
          Products
        </h2>
        {products.map((item, index) => (
          <div key={index} className="max-w-5xl px-6 pt-16 mx-auto">
            <a
              href={item.url}
              className="items-center md:flex md:space-x-6 block hover:shadow-lg"
            >
              <div className="md:w-1/2">
                <div className="flex items-center justify-center">
                  <div className="max-w-md">
                    {item.image && (
                      <Image
                        src={item.image.url}
                        height={item.image.height}
                        width={item.image.width}
                        alt={item.title}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-0 md:w-1/2 md:text-left">
                <h3 className="text-lg font-semibold text-gray-600">
                  {item.title}
                </h3>
                <p className="max-w-md mt-4 text-gray-500 whitespace-pre-wrap">
                  {item.text}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
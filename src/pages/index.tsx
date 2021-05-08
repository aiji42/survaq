import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { FC, useEffect, useState } from "react";
import { Top as TopType } from "../types/top";
import Head from "next/head";
import Image from "next/image";

interface TopProps {
  data: TopType;
}

const Top: FC<TopProps> = ({ data: serverSideData }) => {
  const [data, setData] = useState(serverSideData);
  const router = useRouter();
  useEffect(() => {
    if (!router.query.preview) return;
    fetch(`/api/preview?draftKey=${router.query.preview}`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => null);
  }, [router]);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
      </Head>
      <div>
        <header className="bg-white">
          <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <h1>
                <Image src="/logo.png" width={82.5} height={25} alt="survaq" />
              </h1>
              <div
                onClick={() => setOpenMenu((prev) => !prev)}
                className="flex md:hidden"
              >
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`${
                openMenu ? "flex" : "hidden"
              } flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0`}
            >
              <a
                className="text-sm font-medium text-gray-400 transition-colors duration-300 transform hover:text-red-400"
                href="#"
              >
                Home
              </a>
              <a
                className="text-sm font-medium text-gray-400 transition-colors duration-300 transform hover:text-red-400"
                href="#"
              >
                Templates
              </a>
              <a
                className="text-sm font-medium text-gray-400 transition-colors duration-300 transform hover:text-red-400"
                href="#"
              >
                Price
              </a>
              <a
                className="text-sm font-medium text-gray-400 transition-colors duration-300 transform hover:text-red-400"
                href="#"
              >
                Help
              </a>
            </div>
          </nav>

          <section
            className="flex relative items-center justify-center"
            style={{ height: 400 }}
          >
            <div className="text-center">
              {/* {data.header.image && <Image src={data.header.image.url} height={data.header.image.height} width={data.header.image.width} alt="main visual" />} */}
              <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-gray-800 whitespace-pre-wrap">
                {data.header.text}
              </h2>
            </div>
          </section>
        </header>

        <section className="bg-white">
          <div className="max-w-6xl px-6 py-16 mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Mission</h2>
            <p className="max-w-full mx-auto mt-4 leading-relaxed text-gray-500 whitespace-pre-wrap">
              {data.mission.text}
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl px-6 py-16 mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Bussiness</h2>

            <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-4">
              {data.bussinesses.map((item, index) => (
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
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl px-6 py-16 mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Products</h2>
            {data.products.map((item, index) => (
              <div key={index} className="max-w-5xl px-6 pt-16 mx-auto">
                <div className="items-center md:flex md:space-x-6">
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
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl px-6 py-16 mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Company</h2>
            <div className="max-w-5xl px-6 py-16 mx-auto">
              <div className="items-center md:flex md:space-x-6">
                <div className="md:w-1/3">
                  <div
                    className="max-w-md mt-4 text-left text-gray-500"
                    dangerouslySetInnerHTML={{ __html: data.company.data }}
                  />
                </div>
                <div className="mt-8 md:mt-0 md:w-2/3">
                  <div className="flex items-center justify-center">
                    <iframe
                      src={data.company.embeddedMap}
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

        <footer className="border-t">
          <div className="py-8 text-center">
            <p className="text-gray-500">{data.meta.copyright}</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Top;

export const getStaticProps: GetStaticProps<TopProps> = async () => {
  const data = await fetch(`${process.env.MICRO_CMS_API_ENDPOINT}/top`, {
    headers: { "X-API-KEY": process.env.MICRO_CMS_API_KEY ?? "" },
  })
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
};

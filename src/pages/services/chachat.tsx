import { FC } from 'react'
import Image from 'next/image'

const Chachat: FC = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex flex-col font-sans">
        <div className="container mx-auto px-8">
          <header className="flex flex-col sm:flex-row items-center justify-between py-2 relative">
            <div className="">
              <Image src="/chachat/logo.png" width={200} height={72} />
            </div>
            <nav className="hidden md:flex text-lg">
              <a
                href="#"
                className="text-gray-800 hover:text-blue-300 py-3 px-6"
              >
                特徴
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-300 py-3 px-6"
              >
                価格
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-300 py-3 px-6"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-300 py-3 px-6"
              >
                お問合せ
              </a>
              <a
                href="https://admin.chachat.survaq.com/#/login"
                className="bg-blue-200 hover:bg-blue-300 font-bold rounded-full text-blue-700 py-3 px-6 ml-3"
              >
                Sign In / Sign Up
              </a>
            </nav>
            <button className="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
              <span className="w-5 h-px mb-1 bg-orange-500"></span>
              <span className="w-5 h-px mb-1 bg-orange-500"></span>
              <span className="w-5 h-px mb-1 bg-orange-500"></span>
            </button>
          </header>
          <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
            <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="uppercase text-6xl text-green-400 font-bold leading-none tracking-wide mb-2">
                チャット型フォームの革命児
              </h1>
              <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
                導入・運用コストゼロ！
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                チャチャットは導入がかんたんなチャット型フォームです。対話形式でユーザの情報を獲得することができます。専門的な知識は必要ありません。
              </p>
              <a
                href="#"
                className="bg-blue-300 hover:bg-blue-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full"
              >
                Learn more
              </a>
            </div>
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12 text-right">
              <Image src="/chachat/mainVisual.png" width={700} height={609} />
            </div>
          </main>
          <section className="w-full max-w-6xl mx-auto mt-24">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-600">
                特徴
              </h2>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
                <div className="relative bg-white py-6 px-6 rounded-3xl w-full my-4 shadow">
                  <Image
                    src="/chachat/mainVisual.png"
                    width={700}
                    height={609}
                  />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      簡単操作で導入・運用
                    </p>
                    <p className="my-2 text-gray-600">簡単操作で導入・運用</p>
                  </div>
                </div>

                <div className="relative bg-white py-6 px-6 rounded-3xl w-full my-4 shadow">
                  <Image
                    src="/chachat/mainVisual.png"
                    width={700}
                    height={609}
                  />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      高カスタマイズ性
                    </p>
                    <p className="my-2 text-gray-600">簡単操作で導入・運用</p>
                  </div>
                </div>

                <div className="relative bg-white py-6 px-6 rounded-3xl w-full my-4 shadow">
                  <Image
                    src="/chachat/mainVisual.png"
                    width={700}
                    height={609}
                  />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      分析サポート
                    </p>
                    <p className="my-2 text-gray-600">簡単操作で導入・運用</p>
                  </div>
                </div>

                <div className="relative bg-white py-6 px-6 rounded-3xl w-full my-4 shadow">
                  <Image
                    src="/chachat/mainVisual.png"
                    width={700}
                    height={609}
                  />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      改善活動のサポート
                    </p>
                    <p className="my-2 text-gray-600">簡単操作で導入・運用</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Chachat

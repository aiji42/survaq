import { FC, useState } from 'react'
import Image from 'next/image'

const Chachat: FC = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex flex-col font-sans">
        <div className="container mx-auto px-4">
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
                className="bg-blue-300 hover:bg-blue-400 py-3 px-6 text-lg font-bold text-white rounded-full ml-3"
              >
                ログイン / 会員登録
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
              <h1 className="text-5xl text-green-400 font-bold leading-none tracking-wide mb-2">
                チャット型フォームの革命児
              </h1>
              <h2 className="text-3xl text-orange-500 mb-6">
                導入・運用コストゼロ！
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                チャチャットは永久無料で使用できる導入がかんたんなチャット型フォームです。対話形式でユーザの情報を獲得することができます。専門的な知識は必要ありません。
              </p>
              <a
                href="https://admin.chachat.survaq.com/#/login"
                className="bg-blue-300 hover:bg-blue-400 py-3 px-6 text-lg font-bold text-white rounded-full ml-3"
              >
                会員登録
              </a>
            </div>
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12 text-right">
              <Image src="/chachat/mainVisual.png" width={900} height={900} />
            </div>
          </main>
          <section className="w-full max-w-5xl mx-auto mt-32">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-600">
                特徴
              </h2>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
                <div className="relative bg-white p-16 rounded-xl shadow">
                  <Image src="/chachat/startup.png" width={900} height={900} />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      簡単操作で導入・運用
                    </p>
                    <p className="my-2 text-gray-600">簡単操作で導入・運用</p>
                  </div>
                </div>

                <div className="relative bg-white p-16 rounded-xl shadow">
                  <Image
                    src="/chachat/customize.png"
                    width={900}
                    height={900}
                  />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      高カスタマイズ性
                    </p>
                    <p className="my-2 text-gray-600">簡単操作で導入・運用</p>
                  </div>
                </div>

                <div className="relative bg-white p-16 rounded-xl shadow">
                  <Image src="/chachat/analyze.png" width={900} height={900} />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      分析サポート
                    </p>
                    <p className="my-2 text-gray-600">簡単操作で導入・運用</p>
                  </div>
                </div>

                <div className="relative bg-white p-16 rounded-xl shadow">
                  <Image src="/chachat/team.png" width={900} height={900} />
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
          <section className="w-full max-w-5xl mx-auto mt-32">
            <div className="text-center mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-600">
                価格
              </h2>

              <p className="text-2xl font-bold mb-8 text-gray-600">
                業界驚愕{' '}
                <span className="px-4 text-3xl md:text-5xl font-bold mb-8 text-blue-600">
                  永久無料
                </span>
              </p>
              <p className="text-2xl text-gray-600 py-1">
                すべての機能を制限なく永続的に無料でご使用いただけます。
              </p>
              <p className="text-2xl text-gray-600 py-1">
                アップデートに伴う新機能も最速でご使用いただけます。
              </p>
              <p className="text-2xl text-gray-600 py-1">
                どんなに使用しても費用をいただくことはございません。
              </p>
              <p className="text-gray-600 py-2">
                価格プランが追加・変更になる可能性がございますが、
                <br />
                プランが自動的に切り替わることはございませんので、安心してご利用いただけます。
              </p>
            </div>
          </section>

          <section className="w-full max-w-5xl mx-auto mt-32">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-600">
                FAQ
              </h2>
            </div>
            <div className="shadow bg-white">
              <Accordion title="どんなサイトで使用できますか？">
                <p className="px-8 py-3 leading-6 text-gray-600">
                  <span className="font-bold leading-10">
                    チャットを起動するための短いHTMLを挿入することができるサイトであれば、どんなサイトでも導入可能です。
                  </span>
                  <br />
                  このツールはデータベースを有しており、ユーザが入力した情報を保存できます。つまり、まだ問い合わせフォームがなく、情報を獲得するためのシステムがない状況でも、このツール一つでフォームの作成からユーザ情報の蓄積まで一気通貫で行うことができます。
                  <br />
                  すでに、サイト内にフォームが有り、データを蓄積するためのデータベースが用意されている状況でも、もちろんそのフォームとかんたんに連携が可能です。
                </p>
              </Accordion>
              <Accordion title="どのようなサイトと相性が良いですか？">
                <p className="px-8 py-3 leading-6 text-gray-600">
                  <span className="font-bold leading-10">
                    お問合せや申込みなど、ユーザ情報を獲得することを目的としたサイトであれば間違い有りません。
                  </span>
                  <br />
                  サイトとの相性は特に有りませんが、運営体制として自社内でサイトを改善していきたいという意思がある、チームや組織とは特に相性が良いはずであると考えています。
                  <br />
                  柔軟な拡張機能を有していますので、改善施策の幅を広げることができるのは間違いありません。その計画をご自身で遂行できるチームには十分フィットするはずです。
                </p>
              </Accordion>
              <Accordion title="利用開始の方法を教えて下さい。">
                <p className="px-8 py-3 leading-6 text-gray-600">
                  <span className="font-bold leading-10">
                    お手伝いができる範囲で可能な限りサポートさせていただきます。サポート宛のメールアドレスにご連絡ください。support@survaq.com
                  </span>
                  <br />
                  運営が間もなくノウハウが多くあるわけではございませんので、すべてのご要望にお応えできるかはわかりません。
                  <br />
                  しかし、お役に立てるように誠心誠意努力をいたします。
                  <br />
                  また、お客様からの声や要望をもとに機能改善や、マニュアルの作成などを行ってまいりますので、ご意見ご要望を気軽にお問合せください。
                </p>
              </Accordion>
              <Accordion title="本当に無料で使用できますか？">
                <p className="px-8 py-3 leading-6 text-gray-600">
                  <span className="font-bold leading-10">
                    制限なく無料でご使用いただけます。費用を徴収する予定も今のところございません。
                  </span>
                  <br />
                  「え！？こんなに便利な機能を無料で使えるの？」と思っていただけるような開発をしていくことこそが、私達の美学です。
                  <br />
                  コストの心配をすることなく、無料で使用していただけるツールを提供することが、多くの類似のサービスとの差別化を行う上で一番効果的であると私達は考えました。
                  <br />
                  今後、継続的に行われる追加機能の開発において、一部の機能を有料化する可能性がゼロであるとは言えません。
                  <br />
                  しかし、通知なくこの方針を変えることはありませんし、費用をあとからご請求することもございませんのでご安心ください。
                </p>
              </Accordion>
              <Accordion title="ツールの使い方・分析や改善に関してサポートを受けたいのですが？">
                <p className="px-8 py-3 leading-6 text-gray-600">
                  <span className="font-bold leading-10">
                    お手伝いができる範囲で可能な限りサポートさせていただきます。サポート宛のメールアドレスにご連絡ください。support@survaq.com
                  </span>
                  <br />
                  運営が間もなくノウハウが多くあるわけではございませんので、すべてのご要望にお応えできるかはわかりません。
                  <br />
                  しかし、お役に立てるように誠心誠意努力をいたします。
                  <br />
                  また、お客様からの声や要望をもとに機能改善や、マニュアルの作成などを行ってまいりますので、ご意見ご要望を気軽にお問合せください。
                </p>
              </Accordion>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Chachat

const Accordion: FC<{ title: string }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="border-b">
      <div
        className={
          isOpen
            ? 'border-l-2 border-blue-400'
            : 'border-l-2 border-transparent'
        }
      >
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
        >
          <span
            className={
              isOpen
                ? 'text-indigo-400 text-xl'
                : 'text-gray-600 font-thin text-xl'
            }
          >
            {title}
          </span>
          <div
            className={
              isOpen
                ? 'rounded-full border border-indigo-600 w-7 h-7 flex items-center justify-center'
                : 'rounded-full border border-gray-400 w-7 h-7 flex items-center justify-center'
            }
          >
            <svg
              aria-hidden="true"
              data-reactid="266"
              fill="none"
              height="24"
              stroke="#606F7B"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <polyline points="18 15 12 9 6 15" />
              ) : (
                <polyline points="6 9 12 15 18 9" />
              )}
            </svg>
          </div>
        </div>
        {isOpen && <div>{children}</div>}
      </div>
    </article>
  )
}

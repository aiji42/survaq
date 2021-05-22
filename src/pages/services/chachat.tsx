import { FC, useState } from 'react'
import Image from 'next/image'

const Chachat: FC = () => {
  return (
    <div className="bg-blue-50 font-sans">
      <div className="flex flex-col">
        <header className="bg-blue-700">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 relative">
            <Image src="/chachat/logo.png" width={200} height={72} />
            <nav className="hidden md:flex text-lg">
              <a
                href="#feature"
                className="text-gray-200 hover:text-blue-300 py-3 px-6"
              >
                特徴
              </a>
              <a
                href="#price"
                className="text-gray-200 hover:text-blue-300 py-3 px-6"
              >
                価格
              </a>
              <a
                href="#faq"
                className="text-gray-200 hover:text-blue-300 py-3 px-6"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-blue-300 py-3 px-6"
              >
                お問合せ
              </a>
              <a
                href="https://admin.chachat.survaq.com/#/login"
                className="bg-blue-400 hover:bg-blue-300 py-3 px-6 text-lg font-bold text-white rounded-full ml-3"
              >
                ログイン / 会員登録
              </a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4">
          <section className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
            <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-4xl md:text-5xl text-blue-500 font-bold leading-none tracking-wide mb-6">
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
                className="bg-blue-400 hover:bg-blue-300 py-3 px-6 text-lg font-bold text-white rounded-full"
              >
                ログイン / 会員登録
              </a>
            </div>
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12 text-right">
              <Image src="/chachat/mainVisual.png" width={900} height={900} />
            </div>
          </section>

          <section className="w-full max-w-5xl mx-auto mt-32">
            <div className="text-center max-w-xl mx-auto">
              <h2
                className="text-3xl md:text-5xl font-bold mb-12 text-gray-600"
                id="feature"
              >
                特徴
              </h2>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
                <div className="relative bg-white p-6 md:p-12 rounded-xl shadow">
                  <Image src="/chachat/startup.png" width={900} height={900} />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      シンプル操作で導入・運用
                    </p>
                    <p className="my-2 text-gray-600 tracking-wide leading-6">
                      専門的な知識は不要です。テンプレートを多数用意していますので、登録後すぐにチャットフォームを公開できます。
                    </p>
                    <p className="my-2 text-gray-600 tracking-wide leading-6">
                      通知機能や、ユーザの情報するためのデータベースをこのツール内に用意しています。お客様のサイトにフォームや専用のシステムがなくても、なにも問題ありません。
                    </p>
                  </div>
                </div>

                <div className="relative bg-white p-6 md:p-12 rounded-xl shadow">
                  <Image
                    src="/chachat/customize.png"
                    width={900}
                    height={900}
                  />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      高いカスタマイズ性
                    </p>
                    <p className="my-2 text-gray-600 tracking-wide leading-6">
                      他の類似サービスでできるようなカスタマイズは当たり前のようにできます。それだけでなく、回答内容に応じて会話のシナリオを変えたりなど、多くのカスタマイズが可能です。
                    </p>
                    <p className="my-2 text-gray-600 tracking-wide leading-6">
                      任意のコードを実行したり、APIをリクエストする機能を備えていますので、カスタマイズの可能性は無限大です。(Javascriptなどの知識が必要になります)
                    </p>
                  </div>
                </div>

                <div className="relative bg-white p-6 md:p-12 rounded-xl shadow">
                  <Image src="/chachat/analyze.png" width={900} height={900} />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      分析のサポート
                    </p>
                    <p className="my-2 text-gray-600 tracking-wide leading-6">
                      ユーザ行動の分析のツールを備えています。どこでユーザが比較的多く離脱しているポイントを分析し改善点を割り出すことで、CVRの改善を行うことが可能です。
                    </p>
                    <p className="my-2 text-gray-600 tracking-wide leading-6">
                      Google Analytics
                      をお使いであれば、お客様のアカウントへユーザの行動イベントを連携することも可能です。
                    </p>
                  </div>
                </div>

                <div className="relative bg-white p-6 md:p-12 rounded-xl shadow">
                  <Image src="/chachat/team.png" width={900} height={900} />
                  <div className="mt-8">
                    <p className="text-xl font-bold text-center text-blue-400 my-4">
                      改善活動のサポート
                    </p>
                    <p className="my-2 text-gray-600 tracking-wide leading-6">
                      ABテスト機能など、CVRを改善するための便利な機能を用意しております。
                    </p>
                    <p className="my-2 text-gray-600 tracking-wide leading-6">
                      チャチャット運営チームは多数のECサイトのコンサルティング業務に従事しております。そのノウハウとユーザ行動の情報を駆使し、改善施策のご提案などのサポートも可能ですので、どうぞ気軽にお問合せください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full max-w-5xl mx-auto mt-32">
            <div className="text-center mx-auto">
              <h2
                className="text-3xl md:text-5xl font-bold mb-12 text-gray-600"
                id="price"
              >
                価格
              </h2>

              <p className="text-2xl font-bold mb-8 text-gray-600">
                業界驚愕{' '}
                <span className="px-4 text-3xl md:text-5xl font-bold mb-8 text-blue-500">
                  永久無料
                </span>
              </p>
              <p className="text-xl text-gray-600 leading-8">
                すべての機能を制限なく永続的に無料でご使用いただけます。
                <br />
                どんなに使用しても費用をいただくことはございません。
                <br />
                アップデートに伴う新機能も最速でご使用いただけます。
              </p>
              <p className="text-gray-600 py-8">
                価格プランが追加・変更になる可能性もございますが、
                <br />
                プランが自動的に切り替わることはございませんので、安心してご利用いただけます。
              </p>
            </div>
          </section>

          <section className="w-full max-w-5xl mx-auto mt-32">
            <div className="text-center max-w-xl mx-auto">
              <h2
                className="text-3xl md:text-5xl font-bold mb-12 text-gray-600"
                id="faq"
              >
                FAQ
              </h2>
            </div>
            <div className="shadow bg-white">
              <Accordion title="どんなサイトで使用できますか？">
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  <span className="font-bold">
                    チャットを起動するための短いHTMLを挿入することができるサイトであれば、どんなサイトでも導入可能です。
                  </span>
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  このツールの中でユーザが入力した情報を保存したり管理することができます。つまり、サイトにフォームがなく、情報を保存するシステムがない状況でも、このツール一つでフォームの作成からユーザ情報の蓄積まですべて完結できます。
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  お客様側ですでに同上のシステムやフォームがある場合でも、ツールで設定を行うだけでかんたんに連携が可能です。
                </p>
              </Accordion>
              <Accordion title="どのようなサイトと相性が良いですか？">
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  <span className="font-bold">
                    お問合せや申込みなど、ユーザ情報を獲得することを目的としたサイトであれば間違い有りません。
                  </span>
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  我々株式会サバキューのメンバーは、社内外関わらず多数のECサイトの改善・コンサルティングに従事しています。そのため、申込件数を伸ばしたい・CVRを大きく改善させたいという意思あるチームや組織とは、特に相性がよいはずです。
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  ツール内に柔軟な拡張機能をご用意していますので、改善施策の幅を広げることができるのは間違いありません。その計画をご自身で遂行できるチームには十分フィットするはずです。
                </p>
              </Accordion>
              <Accordion title="利用開始の方法を教えて下さい。">
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  サイト上部の「会員登録」ボタンから会員登録を行ってください。自動的に新しいシナリオ作成ページに移りますので、画面に従って情報を入力していくと準備が整います。
                  <br />
                  その後、サイトに埋め込むためのスクリプトタグが提示されますので、案内に従って、ご利用予定のサイトを編集してスクリプトタグを挿入してください。すぐにチャットのご利用が開始いただけます。
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  シナリオの編集はそのまま管理画面で行うことが可能です。さまざまな便利機能を試してみてください。
                </p>
              </Accordion>
              <Accordion title="本当に無料で使用できますか？">
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  <span className="font-bold">
                    制限なく無料でご使用いただけます。費用を徴収する予定も今のところございません。
                  </span>
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  コストの心配をすることなく、無料で使用していただけるツールを提供することが、多くの類似のサービスとの差別化を行う上で一番効果的であると私達は考えました。そのため、現時点ではすべての機能を無料で使用していただくという方針にしております。
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  今後のツールの機能アップデートを継続的に行う体制を維持するために、一部の機能を有料化する可能性がゼロであるとは断言できません。しかし、通知なくこの方針を変えることはありませんし、費用をあとからご請求することもございませんのでご安心ください。
                </p>
              </Accordion>
              <Accordion title="ツールの使い方・分析や改善に関してサポートを受けたいのですが？">
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  <span className="font-bold">
                    お手伝いができる範囲で可能な限りサポートさせていただきます。ぜひご連絡ください。
                  </span>
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  経験豊富なメンバーが誠心誠意サポートさせていただきます。
                  サポート用メールアドレス{' '}
                  <a href="mailto:support@survaq.com">support@survaq.com</a>{' '}
                  もしくは、サイト右下のチャット問い合わせボタンからお問合せ可能です。
                </p>
                <p className="px-4 md:px-8 py-3 text-gray-600 tracking-wide leading-6">
                  また、お客様からの声や要望をもとに、機能改善やマニュアルの作成などを行ってまいりますので、ご意見ご要望を気軽にお問合せください。
                </p>
              </Accordion>
            </div>
          </section>
        </main>
        <footer className="mt-32 p-4 w-full text-center text-gray-500 bg-gray-200">
          <ul className="max-w-5xl mx-auto flex justify-evenly flex-wrap">
            <li>
              <a href="/#company">会社情報</a>
            </li>
            <li>
              <a href="/policies/privacy-policy">プライパシーポリシー</a>
            </li>
            <li>
              <a href="/policies/term-of-service">利用規約</a>
            </li>
            <li>
              <a href="/policies/legal-notice">特定商取引法に基づく表記</a>
            </li>
            <li>
              <a href="mailto:support@survaq.com">お問合せ</a>
            </li>
          </ul>
          <p className="pt-4">
            Copyright(c) 2021 Survaq Inc. All Rights Reserved.
          </p>
        </footer>
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
          className="flex justify-between items-center p-4 md:px-8 cursor-pointer select-none"
        >
          <span
            className={
              isOpen
                ? 'text-xl text-blue-400'
                : 'text-xl text-gray-600'
            }
          >
            {title}
          </span>
          <div
            className={
              isOpen
                ? 'rounded-full border border-blue-600 w-7 h-7 flex items-center justify-center'
                : 'rounded-full border border-gray-400 w-7 h-7 flex items-center justify-center'
            }
          >
            <svg
              aria-hidden="true"
              data-reactid="266"
              fill="none"
              height="24"
              stroke="#606F7B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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

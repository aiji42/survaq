import { FC } from 'react'
import Image from 'next/image'

const Chachat: FC = () => {
  return (
    <div className="p-2">
      <div className="bg-white flex flex-col font-sans">
        <div className="container mx-auto px-8">
          <header className="flex flex-col sm:flex-row items-center justify-between py-6 relative">
            <div className="">
              <Image src="/chachat/logo.png" width={200} height={72} />
            </div>
            <nav className="hidden md:flex text-lg">
              <a
                href="#"
                className="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                FAQ
              </a>
              <a
                href="#"
                className="bg-purple-200 hover:bg-purple-300 rounded-full uppercase text-purple-700 py-3 px-6"
              >
                Sign Up
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
              <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">
                Digital
              </h1>
              <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
                Marketing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum
                rutrum metus at enim congue scelerisque. Sed suscipit metu non
                iaculis semper consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full"
              >
                Learn more
              </a>
            </div>
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12 text-right">
              <Image src="/chachat/mainVisual.jpg" width={700} height={609} />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Chachat

import { ReactElement } from 'react'

export default function Contact(): ReactElement {
  return (
    <div>
      <div className="flex flex-col mb-12 w-full text-center">
        <h1 className="title-font mb-4 text-gray-900 text-2xl font-medium sm:text-3xl">
          Contact Me
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
        </p>
      </div>
      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="text-gray-600 text-sm leading-7">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-3 py-1 w-full text-gray-700 text-base leading-8 bg-gray-100 focus:bg-white bg-opacity-50 border border-gray-300 focus:border-indigo-500 rounded outline-none transition-colors duration-200 ease-in-out focus:ring-indigo-200 focus:ring-2"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="text-gray-600 text-sm leading-7">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-1 w-full text-gray-700 text-base leading-8 bg-gray-100 focus:bg-white bg-opacity-50 border border-gray-300 focus:border-indigo-500 rounded outline-none transition-colors duration-200 ease-in-out focus:ring-indigo-200 focus:ring-2"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="text-gray-600 text-sm leading-7">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="px-3 py-1 w-full h-32 text-gray-700 text-base leading-6 bg-gray-100 focus:bg-white bg-opacity-50 border border-gray-300 focus:border-indigo-500 rounded outline-none resize-none transition-colors duration-200 ease-in-out focus:ring-indigo-200 focus:ring-2"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto px-8 py-2 text-white text-lg bg-indigo-500 hover:bg-indigo-600 border-0 rounded focus:outline-none">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

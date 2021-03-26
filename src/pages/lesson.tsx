import { ReactElement } from 'react'

export default function Lesson(): ReactElement {
  return (
    <div>
      <div className="container flex flex-col items-center mx-auto px-5 py-24 md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center md:items-start md:mb-0 md:pr-16 md:w-1/2 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-gray-900 text-3xl font-medium sm:text-4xl">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-white text-lg bg-indigo-500 hover:bg-indigo-600 border-0 rounded focus:outline-none">
              Button
            </button>
            <button className="inline-flex ml-4 px-6 py-2 text-gray-700 text-lg bg-gray-100 hover:bg-gray-200 border-0 rounded focus:outline-none">
              Button
            </button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mb-10 mx-auto pb-10 border-b border-gray-200 sm:flex-row">
        <div className="inline-flex flex-shrink-0 items-center justify-center w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full sm:mr-10 sm:w-32 sm:h-32">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 sm:w-16 sm:h-16"
            viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow mt-6 text-center sm:mt-0 sm:text-left">
          <h2 className="title-font mb-2 text-gray-900 text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="text-base leading-relaxed">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="inline-flex items-center mt-3 text-indigo-500">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10 mx-auto pb-10 border-b border-gray-200 sm:flex-row">
        <div className="flex-grow mt-6 text-center sm:mt-0 sm:text-left">
          <h2 className="title-font mb-2 text-gray-900 text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="text-base leading-relaxed">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="inline-flex items-center mt-3 text-indigo-500">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="inline-flex flex-shrink-0 items-center justify-center order-first w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full sm:order-none sm:ml-10 sm:w-32 sm:h-32">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 sm:w-16 sm:h-16"
            viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto sm:flex-row">
        <div className="inline-flex flex-shrink-0 items-center justify-center w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full sm:mr-10 sm:w-32 sm:h-32">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 sm:w-16 sm:h-16"
            viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow mt-6 text-center sm:mt-0 sm:text-left">
          <h2 className="title-font mb-2 text-gray-900 text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="text-base leading-relaxed">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a className="inline-flex items-center mt-3 text-indigo-500">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col mb-20 w-full text-center">
        <h1 className="title-font mb-2 text-gray-900 text-3xl font-medium sm:text-4xl">
          Pricing
        </h1>
        <p className="mx-auto text-gray-500 text-base leading-relaxed lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
        </p>
        <div className="flex mt-6 mx-auto border-2 border-indigo-500 rounded overflow-hidden">
          <button className="px-4 py-1 text-white bg-indigo-500 focus:outline-none">
            Monthly
          </button>
          <button className="px-4 py-1 focus:outline-none">Annually</button>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full md:w-1/2 xl:w-1/4">
          <div className="relative flex flex-col p-6 h-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <h2 className="title-font mb-1 text-sm font-medium tracking-widest">
              START
            </h2>
            <h1 className="mb-4 pb-4 text-gray-900 text-5xl leading-none border-b border-gray-200">
              Free
            </h1>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Tumeric plaid portland
            </p>
            <p className="flex items-center mb-6 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
            <button className="flex items-center mt-auto px-4 py-2 w-full text-white bg-gray-400 hover:bg-gray-500 border-0 rounded focus:outline-none">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-auto w-4 h-4"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="mt-3 text-gray-500 text-xs">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 xl:w-1/4">
          <div className="relative flex flex-col p-6 h-full border-2 border-indigo-500 rounded-lg overflow-hidden">
            <span className="absolute right-0 top-0 px-3 py-1 text-white text-xs tracking-widest bg-indigo-500 rounded-bl">
              POPULAR
            </span>
            <h2 className="title-font mb-1 text-sm font-medium tracking-widest">
              PRO
            </h2>
            <h1 className="flex items-center mb-4 pb-4 text-gray-900 text-5xl leading-none border-b border-gray-200">
              <span>$38</span>
              <span className="ml-1 text-gray-500 text-lg font-normal">
                /mo
              </span>
            </h1>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Tumeric plaid portland
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Hexagon neutra unicorn
            </p>
            <p className="flex items-center mb-6 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
            <button className="flex items-center mt-auto px-4 py-2 w-full text-white bg-indigo-500 hover:bg-indigo-600 border-0 rounded focus:outline-none">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-auto w-4 h-4"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="mt-3 text-gray-500 text-xs">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 xl:w-1/4">
          <div className="relative flex flex-col p-6 h-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <h2 className="title-font mb-1 text-sm font-medium tracking-widest">
              BUSINESS
            </h2>
            <h1 className="flex items-center mb-4 pb-4 text-gray-900 text-5xl leading-none border-b border-gray-200">
              <span>$56</span>
              <span className="ml-1 text-gray-500 text-lg font-normal">
                /mo
              </span>
            </h1>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Tumeric plaid portland
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Hexagon neutra unicorn
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p className="flex items-center mb-6 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
            <button className="flex items-center mt-auto px-4 py-2 w-full text-white bg-gray-400 hover:bg-gray-500 border-0 rounded focus:outline-none">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-auto w-4 h-4"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="mt-3 text-gray-500 text-xs">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 xl:w-1/4">
          <div className="relative flex flex-col p-6 h-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <h2 className="title-font mb-1 text-sm font-medium tracking-widest">
              SPECIAL
            </h2>
            <h1 className="flex items-center mb-4 pb-4 text-gray-900 text-5xl leading-none border-b border-gray-200">
              <span>$72</span>
              <span className="ml-1 text-gray-500 text-lg font-normal">
                /mo
              </span>
            </h1>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Tumeric plaid portland
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Hexagon neutra unicorn
            </p>
            <p className="flex items-center mb-2 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p className="flex items-center mb-6 text-gray-600">
              <span className="inline-flex flex-shrink-0 items-center justify-center mr-2 w-4 h-4 text-white bg-gray-400 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
            <button className="flex items-center mt-auto px-4 py-2 w-full text-white bg-gray-400 hover:bg-gray-500 border-0 rounded focus:outline-none">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-auto w-4 h-4"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="mt-3 text-gray-500 text-xs">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </div>

      <button className="flex mt-20 mx-auto px-8 py-2 text-white text-lg bg-indigo-500 hover:bg-indigo-600 border-0 rounded focus:outline-none">
        Button
      </button>
    </div>
  )
}

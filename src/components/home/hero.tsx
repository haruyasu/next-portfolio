import { ReactElement } from 'react'
// import Image from "next/image";

export default function Hero(): ReactElement {
  return (
    <div>
      <div className="relative mb-5">
        <img
          src="https://placehold.jp/1280x500.png"
          alt="top"
          width={1280}
          height={500}
        />
        <div className="absolute bottom-10 left-10 text-white font-bold">
          <h1 className="mb-3 text-7xl">HARUYASU KAITORI</h1>
          <h2 className="text-4xl">PROGRAMMING INSTRUCTOR</h2>
        </div>
      </div>
      <div className="mb-5">
        <img
          src="https://placehold.jp/1280x150.png"
          alt="youtube"
          width={1280}
          height={150}
        />
      </div>
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 w-1/2 sm:w-1/4">
          <h2 className="title-font text-gray-900 text-3xl font-medium sm:text-4xl">
            2.7K
          </h2>
          <p className="leading-relaxed">Users</p>
        </div>
        <div className="p-4 w-1/2 sm:w-1/4">
          <h2 className="title-font text-gray-900 text-3xl font-medium sm:text-4xl">
            1.8K
          </h2>
          <p className="leading-relaxed">Subscribes</p>
        </div>
        <div className="p-4 w-1/2 sm:w-1/4">
          <h2 className="title-font text-gray-900 text-3xl font-medium sm:text-4xl">
            35
          </h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
        <div className="p-4 w-1/2 sm:w-1/4">
          <h2 className="title-font text-gray-900 text-3xl font-medium sm:text-4xl">
            4
          </h2>
          <p className="leading-relaxed">Products</p>
        </div>
      </div>
    </div>
  )
}

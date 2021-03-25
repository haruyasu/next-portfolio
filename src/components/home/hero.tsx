import { ReactElement } from 'react'
// import Image from "next/image";

export default function Hero(): ReactElement {
  return (
    <section>
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
    </section>
  )
}

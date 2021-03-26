import Link from 'next/link'
import { ReactElement } from 'react'

export default function Post({ post }: any): ReactElement {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
        <div className="relative flex">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/500x500"
          />
          <div className="relative z-10 px-8 py-10 w-full bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="title-font mb-1 text-indigo-500 text-sm font-medium tracking-widest">
              THE SUBTITLE
            </h2>
            <h1 className="title-font mb-3 text-gray-900 text-lg font-medium">
              Shooting Stars
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

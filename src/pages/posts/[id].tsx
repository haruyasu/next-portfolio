import { useRouter } from 'next/router'
import { getAllPostIds, getPostData } from '../../lib/posts'

interface PostProps {
  post: {
    id: number
    title: string
    created_at: string
    content: string
  }
}

export default function PostData({ post }: PostProps) {
  const router = useRouter()

  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }
  return (
    <div className="mb-5">
      <h1 className="mb-5 text-3xl">〇〇チュートリアル</h1>
      <div className="h-96 rounded-lg overflow-hidden">
        <img
          alt="content"
          className="w-full h-full object-cover object-center"
          src="https://dummyimage.com/1000x700"
        />
      </div>
      <div className="flex flex-col mt-10 sm:flex-row">
        <div className="text-center sm:pr-8 sm:py-8 sm:w-1/3">
          <div className="inline-flex items-center justify-center w-20 h-20 text-gray-400 bg-gray-200 rounded-full">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="title-font mt-4 text-gray-900 text-lg font-medium">
              Phoebe Caulfield
            </h2>
            <div className="mb-4 mt-2 w-12 h-1 bg-indigo-500 rounded"></div>
            <p className="text-base">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin
              sartorial venmo tbh hot chicken gentrify portland.
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 text-center border-t border-gray-200 sm:mt-0 sm:pl-8 sm:py-8 sm:w-2/3 sm:text-left sm:border-l sm:border-t-0">
          <p className="mb-4 text-lg leading-relaxed">
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh
            mi umami everyday carry hexagon locavore direct trade art party.
            Locavore small batch listicle gastropub farm-to-table lumbersexual
            salvia messenger bag. Coloring book flannel truffaut craft beer
            drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90's scenester vexillologist forage post-ironic
            asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
            before they sold out four loko. 3 wolf moon brooklyn.
          </p>
        </div>
      </div>

      {/* <p className="m-4">
        {'ID : '}
        {post.id}
      </p>
      <p className="mb-4 text-xl font-bold">{post.title}</p>
      <p className="mb-12">{post.created_at}</p>
      <p className="px-10">{post.content}</p> */}
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: true
  }
}

interface GetPostProps {
  params: {
    id: number
  }
}

export async function getStaticProps({ params }: GetPostProps) {
  const post = await getPostData(params.id)
  return {
    props: {
      post
    },
    revalidate: 3
  }
}

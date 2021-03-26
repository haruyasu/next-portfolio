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
        <div className="px-4 py-8 lg:w-1/3">
          <div className="flex items-start h-full">
            <div className="flex flex-col flex-shrink-0 w-12 text-center leading-none">
              <span className="mb-2 pb-2 text-gray-500 border-b-2 border-gray-200">
                Jul
              </span>
              <span className="title-font text-gray-800 text-lg font-medium leading-none">
                18
              </span>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="title-font mb-1 text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </h2>
              <h1 className="title-font mb-3 text-gray-900 text-xl font-medium">
                The 400 Blows
              </h1>
              <p className="mb-5 leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/103x103"
                  className="flex-shrink-0 w-8 h-8 rounded-full object-cover object-center"
                />
                <span className="flex flex-col flex-grow pl-3">
                  <span className="title-font text-gray-900 font-medium">
                    チュートリアル教材
                  </span>
                </span>
              </a>
            </div>
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

import Head from 'next/head'

import Hero from '../components/home/hero'
import Post from '../components/post/post'
import { getAllPostsData } from '../lib/posts'

function Home({ posts }: any) {
  return (
    <div>
      <Head>
        <title>Haruyasu Kaitori</title>
        <meta name="description" content="ポートフォリオ" />
      </Head>
      <Hero />
      <div className="flex flex-wrap -m-4 mb-5">
        {posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsData()

  return {
    props: { posts },
    revalidate: 3
  }
}

export default Home

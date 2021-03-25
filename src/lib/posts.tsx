import fetch from 'node-fetch'

const SERVERURL = 'http://127.0.0.1:8000/'

export async function getAllPostsData() {
  const res = await fetch(new URL(`${SERVERURL}api/list-post/`))
  const posts = await res.json()
  // const filteredPosts = posts.sort(
  //   (a, b) => new Date(b.created_at) - new Date(a.created_at)
  // )
  // return filteredPosts
  return posts
}

export async function getAllPostIds() {
  const res = await fetch(new URL(`${SERVERURL}api/list-post/`))
  const posts = await res.json()
  return posts.map((post: any) => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export async function getPostData(id: number) {
  const res = await fetch(new URL(`${SERVERURL}api/detail-post/${id}/`))
  const post = await res.json()
  return post
}

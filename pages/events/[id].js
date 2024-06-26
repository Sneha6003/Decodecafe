import { expertise } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { slug } = router.query

  // Ensure slug is a string and find the post by slug
  const post = slug ? expertise.find((post) => post.slug === slug) : null

  if (!slug) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title={post.date} /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <p className='desc-p'>{post.desc}</p>
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  )
}

export default SinglePost

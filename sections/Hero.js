import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"

import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='CodeCafe' caption='De' className='logobg' />
          <h1 className='hero-title'>ENCOURAGING LEARNING IN PUBLIC</h1>

          <div className='sub-heading'>
            <TitleSm title='COMMUNITY' /> <span>.</span>
            <TitleSm title='OPEN-SOURCE' /> <span>.</span>
            <TitleSm title='WEBINARS' /> <span>.</span>
            <TitleSm title='WORKSHOPS' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='A student community of like-minded people who believe in Kaizen (Continuous Improvement).' />
            <p>We are here to encourage learning in public culture and help the student community with their life in/after college. We are currently a Rising Community and engaging students with our Workshops, Webinar, Learning Resources, and Opportunities in Tech.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero

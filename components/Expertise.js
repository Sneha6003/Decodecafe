import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise' id='journey'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Journey' />
            <p>Many college clubs charge students for event/webinar attendance and completion certificates, leading to attendance for certificates rather than learning. Believing in free access to education, we started a community to provide guidance on topics like open source, off-campus internships, life after college, DevOps, investing in the stock market, etc. aiming to empower students with knowledge and opportunities without financial barriers.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id}  />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise

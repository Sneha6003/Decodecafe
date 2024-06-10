import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <TitleLogo title='We are looking forward to another meetup!' /> <br />
            <TitleLogo title='Book Your Seats Now!' />
          </div>
          <div>
            <button className='button-primary'>Register Here</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

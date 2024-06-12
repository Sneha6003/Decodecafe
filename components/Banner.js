import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <TitleLogo title='Join our Discord communtiy!' /> <br />
            <TitleLogo title='and be updated about future events!' />
          </div>
          <div>
            <button className='button-primary'>Join our Community</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

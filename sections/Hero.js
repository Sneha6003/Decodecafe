import React, { useState, useEffect } from 'react';
import { home } from "@/assets/data/dummydata"; // Assuming this imports your dummy data
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import AboutSection from '../pages/AboutSection';
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import backgroundImage1 from "../assets/images/background1.jpg";
import backgroundImage2 from "../assets/images/background2.jpg";
import backgroundImage3 from "../assets/images/background3.jpg";
import backgroundImage4 from "../assets/images/background4.jpg";
import backgroundImage5 from "../assets/images/background5.jpg";

const Hero = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  // List of background images
  const backgrounds = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <section className='hero' style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}>
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
      <AboutSection />
      <Expertise />
      <Banner />
      <Testimonial />

      <Brand />

      <div className='text-center' id='news'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;

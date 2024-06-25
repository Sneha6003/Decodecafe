// Footer.js

import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='CodeCafe' caption='De' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Anytime you feel comfortable ,<br/>but before 10 P.M.<br/>
              </span>
              <br />
              <br />
              <Link href='mailto:decodecafe.community@gmail.com'><h3>=&gt;decodecafe.community@gmail.com</h3></Link>
              <br />
              {/* Replace the button with TooltipContainer */}
              
            </div>
            <ul>
              <h3>Quick Links</h3>
              <li>
                <Link href='/#'>Home</Link>
              </li>
              <li>
                <Link href='/#about'>About</Link>
              </li>
              <li>
                <Link href='/#journey'>Journey</Link>
              </li>
              <li>
                <Link href='/#news'>News & articles</Link>
              </li>
            </ul>
            <ul>
              <h3>Our SERVICES</h3>
              <li>
                <Link href='https://techaways.tech/'>techaways.tech</Link>
              </li>
            </ul>
            <ul>
              <h3>Our Policies</h3>
              <li>
                <Link href='https://github.com/DeCodeCafe/Code-of-Conduct'>Terms & Conditions</Link>
              </li>
              <li>
                <Link href='https://github.com/DeCodeCafe/Code-of-Conduct'>Privacy Policies</Link>
              </li>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 DeCodeCafe Community. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>DeCodeCafe Community</span>
              <span> &nbsp; | &nbsp; </span>
              <span>Lets Grow Toghether</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;

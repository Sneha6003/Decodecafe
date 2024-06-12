import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaUser } from "react-icons/fa";

export const Card = ({ data, caption, show, path }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={data.cover} alt={data.title} />
      </div>
      <div className='card-details'>
        <h1>{data.title}</h1>
        {caption && <div>{caption}</div>}
        <div className='flex'>
          <span>{data.category ? data.category.map(cat => cat.text).join(', ') : ''}</span> {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            <li>{data.desc}</li>
          </ul>
        )}

        <div className='social-icons'>
          {data.linkedin && (
            <a href={data.linkedin} target='_blank' rel='noopener noreferrer'>
              <div className='icon-container'>
                <FaLinkedin size={30} />
              </div>
            </a>
          )}
          {data.github && (
            <a href={data.github} target='_blank' rel='noopener noreferrer'>
              <div className='icon-container'>
                <FaGithub size={30} />
              </div>
            </a>
          )}
          {data.portfolio && (
            <a href={data.portfolio} target='_blank' rel='noopener noreferrer'>
              <div className='icon-container'>
                <FaUser size={30} />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

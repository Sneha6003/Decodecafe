import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaUser } from "react-icons/fa";

export const Card = ({ data, caption, show, path }) => {
  return (
<<<<<<< HEAD
    <div className='card'>
      <div className='card-img'>
        <img src={data.cover} alt={data.title} />
      </div>
      <div className='card-details'>
        <h1>{data.title}</h1>
        {caption && <div>{caption}</div>}
        <div className='flex'>
          <span>{data.category}</span> {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
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
=======
    <>
      <div className='card'>
        <div className='card-img'>
          <a href={`${path}/${data.slug}`}><img src={data.cover} alt={data.title} className="h-16 w-16 object-cover object-center"/></a>
        </div>
        <div className='card-details'>
          <Link href={`${path}/${data.slug}`} className='title-link'>
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href={`${path}/${data.slug}`}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}

          <div className='flex'>
            <span> {data.desc} </span>
          </div>

          {show && (
          <ul className="flex space-x-3">
            {data.category.map((text, i) => (
              <li key={i} className="p-3 rounded bg-white text-black inline-flex items-center">
                {`${text.text}${i !== data.category.length - 1 ? ' • ' : ''}`}
              </li>
            ))}
          </ul>
>>>>>>> f66e5a2986d91e1fd0c061dd49e57af0f25688c5
          )}
        </div>
      </div>
    </div>
  );
};

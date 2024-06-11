import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"

export const Card = ({ data, caption, show, path }) => {
  return (
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
                {text.text + (i !== data.category.length - 1 ? ' • ' : '')}
              </li>
            ))}
          </ul>
          )}
        </div>
      </div>
    </>
  )
}

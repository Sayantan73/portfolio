import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import resume from '../assets/resume.pdf'

const SocialLinkes = () => {
  const links = [
    {
      id: 1,
      child: (<> <FaLinkedin size={15} /> </>),
      href: 'https://www.linkedin.com/in/sayantan-karan-b78495249/',
      style: "rounded-tl-md"
    },
    {
      id: 2,
      child: (<> <FaGithub size={15} /></>),
      href: 'https://github.com/Sayantan73',
    },
    {
      id: 3,
      child: (<> <HiOutlineMail size={15} /></>),
      href: 'mailto: sayantankaran73@gmail.com',
    },
    {
      id: 4,
      child: (<> <BsFillPersonLinesFill size={15} /></>),
      href: resume,
      style: "rounded-bl-md",
      download: true,
    },
  ];
  return (
    <>
      <div className='z-10 flex flex-col top-[35%] right-0 fixed'>
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li key={id} className={"flex justify-between items-center w-15 h-10 px-4 mr-[-5px] hover:rounded-md duration-300 bg-gray-500 "  + style}>
              <a className='flex justify-between items-center w-full text-white' href={href} download={download} target='_blank' rel="noreferrer"> {child}  </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}


export default SocialLinkes

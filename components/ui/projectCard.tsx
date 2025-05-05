import Image from 'next/image';
import React from 'react'

interface ProjectCardProps {
  image: string;
  title: string;
  tag: string;
  githubUrl: string;
  netlifyUrl: string;
}

function projectCard({ image, title, tag, githubUrl, netlifyUrl }: ProjectCardProps) {
  return (
    <div className='relative group'>
      <div
        className='h-52 md:h-72 w-72 rounded bg-white transition-transform duration-50 group-hover:blur-[2px]'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className='text-white'>
        <h5 className='text-white text-lg'>{title}</h5>
        <p className='text-lg md:text-lg font-bold mb-6 bg-gradient-to-r leading-right'
            style={{
              backgroundImage: 'linear-gradient(to right, #fef08a, #86efac)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}>{tag}</p>
      </div>


      <div className="absolute inset-0 flex flex-col-2 gap-4 items-center justify-center bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 mb-4 bg-white text-white rounded-full hover:bg-white transition"
        >
          <Image src="/code.svg" width={6} height={6} alt="GitHub" className='w-6 h-6' />
        </a>
        <a
              href={netlifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 mb-4 bg-white text-white rounded-full hover:bg-white transition"
        >
          <Image width={6} height={6} src="/web.svg" alt="GitHub" className='w-6 h-6' />

        </a>
      </div>

    </div>
  )
}

export default projectCard
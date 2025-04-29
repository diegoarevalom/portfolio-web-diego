import React from 'react'

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  tag: string;
}

function projectCard({ imgUrl, title, description, tag }: ProjectCardProps) {
  return (
    <div>
      <div
        className='h-52 md:h-72 bg-white'
        style={{
          backgroundImage: `${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className='text-white'>
        <h5>{title}</h5>
        <p>{description}</p>
        <p>{imgUrl}</p>
      </div>
    </div>
  )
}

export default projectCard
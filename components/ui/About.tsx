import intersectionObserver from '@/hooks/intersectionObserver';
import React, { useEffect } from 'react'

interface AboutProps {
  ref: React.RefObject<HTMLElement | null>;
}



function About({ ref }: AboutProps) {
  const [_, isVisible] = intersectionObserver({ threshold: 0.5 });
  useEffect(() => {
    if (isVisible) {
      console.log('About section is visible');

    }
  }, [isVisible]);

  return (
    <section ref={ref} id='about' className='min-h-screen flex items-center justify-center relative'>
      <div className='flex flex-col lg:flex-row items-center justify-between w-full px-8 lg:px-16'>
        <div className='flex flex-col items-start px-8 lg:px-16'>
          <h2 className='text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r leading-right'
            style={{
              backgroundImage: 'linear-gradient(to right, #fef08a, #86efac)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}>About</h2>
          <p className='text-gray-400 text-lg max-w-lg mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, autem. Quae repellat dolore blanditiis quas. Ipsum quo nam, distinctio deleniti corrupti vel enim, similique reprehenderit praesentium magnam temporibus doloribus fuga.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center'>
          <div className='bg-yellow-200 p-4 shadow-md text-xl'>
            <div className='text-black'>2+</div>
            <div className='text-black'>Years Experience</div>
          </div>
          <div className=' bg-yellow-200 p-4 shadow-md text-xl'>
            <div className='text-black'>30+</div>
            <div className='text-black'>Projects</div>
          </div>
          <div className='bg-yellow-200 p-4 shadow-md text-xl'>
            <div className='text-black'>4+</div>
            <div className='text-black'>Certifications</div>
          </div>
          <div className='bg-yellow-200 p-4 shadow-md text-xl'>
            <div className='text-black'>10+</div>
            <div className='text-black'>Learned Technologies</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
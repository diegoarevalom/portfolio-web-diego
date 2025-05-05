'use client'
import intersectionObserver from '@/hooks/intersectionObserver';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { TypingAnimation } from '../magicui/typing-animation';

interface HomeProps {
  ref: React.RefObject<HTMLElement | null>;
}

function home({ ref }: HomeProps) {
  const [_, isVisible] = intersectionObserver({ threshold: 0.5 });
  useEffect(() => {
    if (isVisible) {
      console.log('Home section is visible');
    }
  }, [isVisible]);

  return (
    <section ref={ref} id='home' className='min-h-screen flex items-center justify-center relative'>
      <div className='flex flex-col lg:flex-row items-center justify-between w-full px-8 lg:px-16'>
        {/* Principal Content */}
        <div className='flex flex-col items-start lg:w-1/2'>
          <TypingAnimation
            className='text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r leading-right'
            style={{
              backgroundImage: 'linear-gradient(to right, #fef08a, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Hi, I'm Diego, a Front End Developer
          </TypingAnimation>
          <p className='text-gray-400 text-lg max-w-lg mb-6'>
            Computer Engineer specializing in front-end development. Proficient in solving complex problems, with rapid adaptation to new technologies, quick learning, and excellent collaboration skills. Motivated by innovation and continuous improvement.
          </p>
          <div className='flex space-x-4 py-4'>
            <button className='px-6 py-3 rounded-full bg-gradient-to-br from-yellow-200 to-green-300 bg-white text-black transition transform hover:translate-y-1' onClick={() => window.location.href = '#projects'}>
              View Projects
            </button>
            <button className='px-1 rounded-full bg-transparent bg-gradient-to-br from-yellow-200 to-green-300 text-white transition transform hover:translate-y-1' onClick={() => window.location.href = 'https://drive.google.com/file/d/18ZAh2fOxk0CdjQadLehi4huUfAV7w6Ds/view?usp=sharing'}>
              <span className='block bg-[#121212] rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>
        {/* Logo Image */}
        <div className='flex justify-center items-center lg:w-1/2 mt-8 lg:mt-0'>
          <div className='rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/images/yuta.png'
              alt='logo'
              width={300}
              height={300}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              style={{ color: 'white' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default home
import intersectionObserver from '@/hooks/intersectionObserver';
import React, { useEffect } from 'react'
import Image from 'next/image';

interface SkillsProps {
  ref: React.RefObject<HTMLElement | null>;

}

function Skills({ ref }: SkillsProps) {
  const [, isVisible] = intersectionObserver({ threshold: 0.5 });
  useEffect(() => {
    if (isVisible) {
      console.log('Skills section is visible');
    }
  }, [isVisible]);


  return (
    <section ref={ref} id='skills' className='min-h-screen flex items-center justify-center relative'>
      <div className='w-full items-center text-center justify-center flex flex-col gap-4'>
        <div className='text-center py-4'>
          <h2 className='text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r leading-right'
            style={{
              backgroundImage: 'linear-gradient(to right, #fef08a, #86efac)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}>Skills</h2>
          <p className='text-gray-400 text-lg'>I specialize in the following areas:</p>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div>
            <div>
              <Image width={20} height={20} src='/react.svg' alt="react logo" className='h-20 w-20 transform hover:scale-90 ' />
              <h3>React</h3>
            </div>
          </div>
          <div>
            <div>
              <Image width={20} height={20} src='/js.svg' alt="javascript logo" className='h-20 w-20 transform hover:scale-90' />
              <h3>Javascript</h3>
            </div>
          </div>
          <div>
            <div>
              <Image width={20} height={20} src='/html5.svg' alt="html logo" className='h-20 w-20 transform hover:scale-90' />
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 py-4'>
          <div>
            <div>
              <Image width={20} height={20} src='/css.svg' alt="css logo" className='h-20 w-20 transform hover:scale-90' />
              <h3>CSS</h3>
            </div>
          </div>
          <div>
            <div>
              <Image width={20} height={20} src='/git.svg' alt="git logo" className='h-20 w-20 transform hover:scale-90' />
              <h3>GIT</h3>
            </div>
          </div>
        </div>

      </div>


    </section >

  )
}

export default Skills
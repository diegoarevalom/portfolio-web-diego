import intersectionObserver from '@/hooks/intersectionObserver';
import React, { useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
import { Card, CardContent } from './card';

interface SkillsProps {
  ref: React.RefObject<HTMLElement | null>;

}

function skills({ ref }: SkillsProps) {
  const [_, isVisible] = intersectionObserver({ threshold: 0.5 });
  useEffect(() => {
    if (isVisible) {
      console.log('Skills section is visible');
    }
  }, [isVisible]);


  return (
    <section ref={ref} id='skills' className='min-h-screen flex items-center justify-center relative'>
      {/* <div className='text-center'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r leading-right'
          style={{
            backgroundImage: 'linear-gradient(to right, #018002, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}>Skills</h1>
        <Carousel opts={{ align: "start", }} className="w-full max-w-sm">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">React</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}

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
              <img src='/react.svg' alt="react logo" className='h-20 w-20 transform hover:scale-90 ' />
              <h3>React</h3>
            </div>
          </div>
          <div>
            <div>
              <img src='/js.svg' alt="javascript logo" className='h-20 w-20 transform hover:scale-90' />
              <h3>Javascript</h3>
            </div>
          </div>
          <div>
            <div>
              <img src='/html5.svg' alt="html logo" className='h-20 w-20 transform hover:scale-90' />
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 py-4'>
          <div>
            <div>
              <img src='/css.svg' alt="css logo" className='h-20 w-20 transform hover:scale-90' />
              <h3>CSS</h3>
            </div>
          </div>
          <div>
            <div>
              <img src='/git.svg' alt="git logo" className='h-20 w-20 transform hover:scale-90' />
              <h3>GIT</h3>
            </div>
          </div>
        </div>

      </div>


    </section >

  )
}

export default skills
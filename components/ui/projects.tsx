import intersectionObserver from '@/hooks/intersectionObserver';
import React, { useEffect } from 'react'
import ProjectData from '../data/projectData';
import ProjectCard from './projectCard';

interface ProjectsProps {
  ref: React.RefObject<HTMLElement | null>;
}

function projects({ ref }: ProjectsProps) {
  const [_, isVisible] = intersectionObserver({ threshold: 0.5 });
  useEffect(() => {
    if (isVisible) {
      console.log('Projects section is visible');
    }
  }, [isVisible]);

  return (
    <section ref={ref} id='projects' className='min-h-screen flex items-center justify-center relative' >
      <div className='text-center'>
        <h2 className='text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r leading-right'
          style={{
            backgroundImage: 'linear-gradient(to right, #fef08a, #86efac)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}>Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {ProjectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag[0]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default projects
import intersectionObserver from '@/hooks/intersectionObserver';
import React, { useEffect, useState } from 'react'
import ProjectData from '../data/projectData';
import ProjectCard from './projectCard';

interface ProjectsProps {
  ref: React.RefObject<HTMLElement | null>;
}

const FILTERS = ['Todos', 'IA', 'Fullstack', 'Profesional', 'Frontend'];

function Projects({ ref }: ProjectsProps) {
  const [, isVisible] = intersectionObserver({ threshold: 0.5 });
  const [activeFilter, setActiveFilter] = useState('Todos');

  useEffect(() => {
    if (isVisible) {
      console.log('Projects section is visible');
    }
  }, [isVisible]);

  const filteredProjects = activeFilter === 'Todos'
    ? ProjectData
    : ProjectData.filter((project) => project.categories.includes(activeFilter));

  return (
    <section ref={ref} id='projects' className='min-h-screen flex items-center justify-center relative' >
      <div className='text-center max-w-6xl w-full mx-auto px-4'>
        <h2 className='text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r leading-right'
          style={{
            backgroundImage: 'linear-gradient(to right, #fef08a, #86efac)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}>Projects
        </h2>

        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  isActive
                    ? 'px-4 py-2 rounded-full text-sm font-semibold text-black transition'
                    : 'px-4 py-2 rounded-full text-sm font-medium text-gray-300 border border-white/15 hover:border-white/40 transition'
                }
                style={isActive ? { backgroundImage: 'linear-gradient(to right, #fef08a, #86efac)' } : undefined}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

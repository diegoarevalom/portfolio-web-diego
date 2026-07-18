import { Building2, Layers, MonitorSmartphone, Sparkles, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  categories: string[];
  gitUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
  company?: string;
}

interface ProjectCardProps {
  project: Project;
}

const CATEGORY_STYLES: Record<string, { gradient: string; Icon: LucideIcon }> = {
  IA: { gradient: 'from-fuchsia-500 to-indigo-500', Icon: Sparkles },
  Fullstack: { gradient: 'from-sky-500 to-cyan-400', Icon: Layers },
  Frontend: { gradient: 'from-emerald-500 to-teal-400', Icon: MonitorSmartphone },
  Profesional: { gradient: 'from-slate-600 to-slate-800', Icon: Building2 },
};

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, stack, categories, gitUrl, demoUrl, isPrivate, company } = project;
  const { gradient, Icon } = CATEGORY_STYLES[categories[0]] ?? CATEGORY_STYLES.Fullstack;
  const hasActions = !isPrivate && (gitUrl || demoUrl);

  return (
    <div className="flex flex-col w-full rounded-lg border border-white/10 bg-white/5 overflow-hidden">
      <div className="relative group">
        <div
          className={`h-52 md:h-72 w-full flex items-center justify-center bg-gradient-to-br ${gradient} transition-transform duration-150 group-hover:blur-[2px]`}
        >
          <Icon className="w-16 h-16 md:w-20 md:h-20 text-white/90" />
        </div>

        {hasActions && (
          <div className="absolute inset-0 flex gap-4 items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
            {gitUrl && (
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:scale-105 transition"
              >
                <Image src="/code.svg" width={24} height={24} alt="GitHub" className="w-6 h-6" />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:scale-105 transition"
              >
                <Image width={24} height={24} src="/web.svg" alt="Demo" className="w-6 h-6" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 gap-2 p-4 text-left">
        <div className="flex items-start justify-between gap-2">
          <h5 className="text-white text-lg font-semibold">{title}</h5>
          {isPrivate && (
            <span className="shrink-0 text-xs font-medium bg-white/10 text-gray-200 px-2 py-1 rounded-full whitespace-nowrap">
              🔒 Proyecto Privado
            </span>
          )}
        </div>

        {company && <p className="text-sm italic text-gray-400">{company}</p>}

        <p className="text-sm text-gray-400">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-300 border border-white/10 rounded-full px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

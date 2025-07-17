
import React from 'react';
import type { Project } from '../types';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const isComingSoon = project.status === 'coming_soon';

  const cardContent = (
    <div className="group relative overflow-hidden rounded-lg aspect-w-4 aspect-h-3 bg-gray-800">
      <img src={project.imageUrl} alt={t(project.title)} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-display font-bold text-white mb-1">{project.client}</h3>
        <p className="text-gray-300 transition-all duration-300 opacity-100 group-hover:opacity-100">{t(project.title)}</p>
        <div className="h-0.5 w-0 bg-brand-red transition-all duration-500 group-hover:w-full mt-2"></div>
      </div>
       {isComingSoon && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
          <h3 className="text-white text-3xl font-display font-bold tracking-wider border-2 border-dashed border-gray-500 px-8 py-4">{t('coming_soon')}</h3>
        </div>
      )}
    </div>
  );

  return isComingSoon ? (
    <div className="cursor-not-allowed">{cardContent}</div>
  ) : (
    <Link to={`/projects/${project.id}`}>{cardContent}</Link>
  );
};

export default ProjectCard;

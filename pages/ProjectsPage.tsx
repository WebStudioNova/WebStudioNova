import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants/content';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useTranslation } from '../hooks/useTranslation';

const ProjectsPage: React.FC = () => {
  const { t, language } = useTranslation();

  const titleClass = language === 'ba'
    ? 'text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white'
    : 'text-5xl md:text-7xl font-display font-extrabold text-white';

  return (
    <PageWrapper>
      <AnimateOnScroll className="text-center mb-20">
        <h1 className={titleClass}>{t('projects_page_title')}</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          {t('projects_page_desc')}
        </p>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={index * 100}>
            <ProjectCard project={project} />
          </AnimateOnScroll>
        ))}
      </div>
    </PageWrapper>
  );
};

export default ProjectsPage;
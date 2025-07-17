
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { PROJECTS } from '../constants/content';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useTranslation } from '../hooks/useTranslation';
import ImageGallery from '../components/ImageGallery';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  
  const projectIndex = PROJECTS.findIndex(p => p.id === id && p.status === 'completed');
  
  if (projectIndex === -1) {
    return (
      <PageWrapper>
        <div className="text-center">
          <h1 className="text-4xl font-display text-white">{t('project_not_found_title')}</h1>
          <p className="text-gray-400 mt-4">{t('project_not_found_desc')}</p>
          <Link to="/projects" className="mt-8 inline-block text-brand-red hover:text-white">
            &larr; {t('project_not_found_cta')}
          </Link>
        </div>
      </PageWrapper>
    );
  }
  
  const project = PROJECTS[projectIndex];
  const completedProjects = PROJECTS.filter(p => p.status === 'completed');
  const currentProjectIndexInCompleted = completedProjects.findIndex(p => p.id === project.id);
  const nextProject = completedProjects[(currentProjectIndexInCompleted + 1) % completedProjects.length];
  
  return (
    <PageWrapper>
      {/* Project Hero */}
      <AnimateOnScroll className="mb-24">
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight">{project.client}</h1>
        <p className="text-2xl text-gray-400 mt-2">{t(project.title)}</p>
        <img src={project.imageUrl} alt={t(project.title)} className="rounded-lg shadow-2xl mt-12 w-full object-cover aspect-video" />
      </AnimateOnScroll>

      {/* Project Story */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <aside className="lg:col-span-1">
          <AnimateOnScroll className="sticky top-24">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">{t('project_details_title')}</h3>
            <div className="mt-4 space-y-4 text-lg">
              <div>
                <h4 className="font-bold text-white">{t('project_details_client')}</h4>
                <p className="text-gray-400">{project.client}</p>
              </div>
              <div>
                <h4 className="font-bold text-white">{t('project_details_services')}</h4>
                <p className="text-gray-400">{t(project.category)}</p>
              </div>
            </div>
          </AnimateOnScroll>
        </aside>

        <article className="lg:col-span-2 space-y-12 text-lg text-gray-300">
          <AnimateOnScroll>
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-4">{t('project_section_problem')}</h2>
              <p className="whitespace-pre-wrap">{t(project.problem)}</p>
            </section>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-4">{t('project_section_process')}</h2>
              <p className="whitespace-pre-wrap">{t(project.process)}</p>
            </section>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-4">{t('project_section_solution')}</h2>
              <p className="whitespace-pre-wrap">{t(project.solution)}</p>
            </section>
          </AnimateOnScroll>
           <AnimateOnScroll>
            <section className="bg-gray-900 border border-brand-red p-8 rounded-lg">
              <h2 className="text-3xl font-display font-bold text-white mb-4">{t('project_section_result')}</h2>
              <p className="whitespace-pre-wrap text-brand-red/90">{t(project.result)}</p>
            </section>
          </AnimateOnScroll>
        </article>
      </div>
      
      {/* Process Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <AnimateOnScroll className="mt-24">
            <section>
                <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">{t('project_gallery_title')}</h2>
                <ImageGallery images={project.galleryImages} />
            </section>
        </AnimateOnScroll>
      )}

      {/* Next Project Link */}
      {nextProject && (
        <AnimateOnScroll className="mt-32 border-t border-gray-800 pt-16 text-center">
            <p className="text-gray-500 mb-4">{t('project_next_project')}</p>
            <Link to={`/projects/${nextProject.id}`} className="text-4xl md:text-6xl font-display font-bold text-white hover:text-brand-red transition-colors duration-300">
                {nextProject.client} &rarr;
            </Link>
        </AnimateOnScroll>
      )}
    </PageWrapper>
  );
};

export default ProjectDetailPage;
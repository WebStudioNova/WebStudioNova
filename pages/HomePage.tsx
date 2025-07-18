
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, SERVICES, TESTIMONIALS, DIFFERENTIATORS, TECHNOLOGIES } from '../constants/content';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useTranslation } from '../hooks/useTranslation';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const featuredProjects = PROJECTS.filter(p => p.status === 'completed').slice(0, 3);
  const highlightedServices = SERVICES.slice(0, 4);

  return (
    <PageWrapper className="!py-0">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-6">
          <AnimateOnScroll>
            <h1 className="font-display font-extrabold text-white leading-tight">
  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
    {t('home_hero_l1')}
  </span>
  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-red">
    {t('home_hero_l2')}
  </span>
  <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
    {t('home_hero_l3')}
  </span>
</h1>

          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mt-8">
              {t('home_hero_desc')}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-12">
              <Link
                to="/projects"
                className="bg-brand-red text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105 text-lg"
              >
                {t('home_hero_cta')}
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-brand-dark">
         <div className="container mx-auto px-6">
            <AnimateOnScroll className="text-left mb-16 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">{t('home_services_title')}</h2>
                <p className="text-gray-400 mt-4 text-lg">{t('home_services_desc')}</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlightedServices.map((service, index) => (
                <AnimateOnScroll key={service.title} delay={index * 100}>
                    <ServiceHighlight title={t(service.title)} Icon={service.icon}/>
                </AnimateOnScroll>
              ))}
            </div>
             <AnimateOnScroll className="text-center mt-16">
                <Link to="/services" className="text-brand-red font-semibold hover:text-white transition-colors text-lg group">
                    {t('home_services_cta')} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
                </Link>
            </AnimateOnScroll>
        </div>
      </section>
      
      <OurArsenal />

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <AnimateOnScroll className="text-left mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">{t('home_projects_title')}</h2>
              <p className="text-gray-400 mt-2">{t('home_projects_desc')}</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                  <AnimateOnScroll key={project.id} delay={index * 100}>
                    <ProjectCard project={project} />
                  </AnimateOnScroll>
              ))}
            </div>
             <AnimateOnScroll className="text-center mt-16">
                <Link to="/projects" className="text-brand-red font-semibold hover:text-white transition-colors text-lg group">
                    {t('home_projects_cta')} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
                </Link>
            </AnimateOnScroll>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">{t('home_process_title')}</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">{t('home_process_desc')}</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimateOnScroll>
              <ProcessStep number="01" title={t('home_process_step1_title')} description={t('home_process_step1_desc')} />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <ProcessStep number="02" title={t('home_process_step2_title')} description={t('home_process_step2_desc')} />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <ProcessStep number="03" title={t('home_process_step3_title')} description={t('home_process_step3_desc')} />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
       <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">{t('home_testimonials_title')}</h2>
              <p className="text-gray-400 mt-4 text-lg">{t('home_testimonials_desc')}</p>
          </AnimateOnScroll>
          <div className="space-y-12">
            {TESTIMONIALS.map((testimonial, index) => (
               <AnimateOnScroll key={index} delay={index * 100}>
                <blockquote className="max-w-4xl mx-auto text-center">
                  <p className="text-2xl md:text-3xl font-medium text-white leading-snug">"{t(testimonial.quote)}"</p>
                  <footer className="mt-6">
                    <span className="text-xl font-bold text-brand-red">{testimonial.author}</span>
                    <span className="text-gray-400">, {testimonial.company}</span>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const ServiceHighlight: React.FC<{title: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = ({ title, Icon }) => (
    <div className="bg-gray-900 p-8 border border-gray-800 hover:border-brand-red transition-all duration-300 rounded-lg group h-full">
        <Icon className="w-8 h-8 text-brand-red mb-4 transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-2xl font-display font-bold text-white mt-4 mb-2">{title}</h3>
    </div>
);

const ProcessStep: React.FC<{number: string; title: string; description: string}> = ({number, title, description}) => (
  <div className="border-t-2 border-brand-red pt-6">
    <span className="font-display text-5xl font-bold text-gray-800">{number}</span>
    <h3 className="text-2xl font-display font-bold text-white mt-4">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

const OurArsenal = () => {
    const Marquee = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => (
        <div className="marquee-wrapper">
            <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`}>
                {[...items, ...items].map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-2xl md:text-4xl font-display font-bold text-brand-light px-8 whitespace-nowrap">{item}</span>
                        <span className="text-brand-red text-4xl font-bold">◆</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-black">
            <style>{`
                .marquee-wrapper {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                }
                .marquee {
                    display: flex;
                    flex-shrink: 0;
                    width: max-content;
                    animation: marquee-scroll 40s linear infinite;
                }
                .marquee-reverse {
                    animation-direction: reverse;
                }
                @keyframes marquee-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
            <div className="space-y-8">
                <Marquee items={DIFFERENTIATORS} />
                <Marquee items={TECHNOLOGIES} reverse />
            </div>
        </section>
    );
};

export default HomePage;

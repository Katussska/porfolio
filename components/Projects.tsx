'use client';

import { BackgroundGradient } from '@/components/ui';
import { Project } from '@/lib/types';
import BadgeList from '@/components/BadgeList';
import { useState } from 'react';

const ProjectCard = ({
  title,
  description,
  badges,
  screenshots,
  liveUrl,
  codeUrl,
}: Project) => {
  const [backdropToggle, setBackdropToggle] = useState(false);

  return (
    <>
      <div className="mb-24 max-w-6xl px-3 md:px-0">
        <BackgroundGradient
          animate
          className="flex flex-col-reverse items-center gap-6 rounded-[18px] bg-zinc-900 p-4 sm:p-10 md:flex-row md:justify-between"
        >
          <div className="flex flex-col items-center  md:w-4/12">
            <h3 className="mb-4">{title}</h3>
            <BadgeList badges={badges} />
            <p className="mb-8 text-justify">{description}</p>
            <div className="flex flex-row gap-6 font-body">
              <a href={liveUrl}>
                <button className="bg-text-gradient transform rounded-lg border border-white bg-white px-6 py-2 font-bold text-black transition duration-300 ease-in-out hover:-translate-y-1">
                  Demo
                </button>
              </a>
              <a href={codeUrl}>
                <button className="duration-400 transform rounded-lg border border-white bg-transparent px-6 py-2 text-white transition hover:-translate-y-1">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-8/12">
            <picture>
              <img
                className="z-50 rounded-xl duration-300 ease-in-out hover:scale-140"
                src={screenshots.desktop}
                alt="Showcase"
                onMouseEnter={() => setBackdropToggle(true)}
                onMouseLeave={() => setBackdropToggle(false)}
              />
            </picture>
          </div>
        </BackgroundGradient>
      </div>
    </>
  );
};

const Projects = () => {
  const projects: Array<Project> = [
    {
      title: 'MovieHub 2.0',
      description:
        "MovieHub 2.0 is a mobile and web application for discovering movies. After signing up, users can use a range of features, from searching for movies to checking out what's coming soon. They can also read or write reviews to share their thoughts.",
      badges: [
        'Ionic',
        'React',
        'Typescript',
        'CSS',
        'Spring Boot',
        'PostgreSQL',
        'Docker',
      ],
      screenshots: {
        mobile: '/projects/moviehub20mobile.png',
        desktop: '/projects/moviehub20.png',
      },
      liveUrl: 'https://moviehub.ymir.orexin.cz',
      codeUrl: 'https://github.com/Katussska/MovieHub-2.0',
    },
    {
      title: 'MovieHub',
      description:
        'MovieHub  is a web application for discovering now trending movies. Users can also search for movies  and check their details.' +
        '\n*Has small bug. For start click on MovieHub logo.*',
      badges: ['Javascript', 'CSS', 'HTML'],
      screenshots: {
        mobile: '',
        desktop: '/projects/moviehub.png',
      },
      liveUrl: 'https://katussska.github.io/MovieHub/',
      codeUrl: 'https://github.com/Katussska/MovieHub',
    },
  ];

  return (
    <div>
      <h2 className="py-16 text-center">Projects</h2>
      <div className="flex flex-col">
        {projects.map((project, key) => (
          <ProjectCard {...project} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import Card from './Card';
import { SURFACE_CARD } from '../styles';
import { IoMusicalNoteOutline } from 'react-icons/io5';
import { GiLeechingWorm } from 'react-icons/gi';
import { LuGamepad } from 'react-icons/lu';
import { MdLightbulbOutline } from 'react-icons/md';

interface CardInfo {
  color: string;
  title: string;
  description: JSX.Element;
  icon: React.ElementType;
}

const HomeCard = () => {
  const hobbies: CardInfo[] = [
    {
      icon: IoMusicalNoteOutline,
      title: 'Music',
      description: (
        <>
          I love playing <b>guitar</b> and listening to <b>Dream Theater</b> and
          Polyphia.
        </>
      ),
      color: '#FD1D1D',
    },
    {
      icon: GiLeechingWorm,
      title: 'Movies',
      description: (
        <>
          My favorite movies are <b>Dune 2</b> and{' '}
          <b>The Revenge of the Sith</b>.
        </>
      ),
      color: '#FCB045',
    },
    {
      icon: LuGamepad,
      title: 'Gaming',
      description: (
        <>I love to play video games, especially RPGs and strategy games.</>
      ),
      color: '#9747FF',
    },
    {
      icon: MdLightbulbOutline,
      title: 'Programming',
      description: (
        <>
          My favorite areas involve <b>Front-End</b>, Java and C++.
        </>
      ),
      color: '#4F5A69',
    },
  ];

  const paragraphs = [
    {
      title: 'Who Am I?',
      body: getDescription(),
    },
    {
      title: 'My Hobbies',
      body: getHobbiesCard(),
    },
  ];

  function getDescription() {
    return (
      <>
        <p className="mb-4">
          I'm a Software Engineer based in Porto, Portugal, with an M.Sc. in
          Software Engineering from FEUP. Over the past couple of years I've
          built full-stack applications and ML tooling across a few different
          internships — from a scalable image similarity search engine on top of
          Qdrant at SMARTEX.ai, to custom Jira Service Management tooling at
          Sngular, to AI-driven building detection models for disaster response
          at INESC TEC.
        </p>
        <p>
          Outside of code, I'm a guitarist of 8+ years with a handful of live
          shows under my belt, and I'm always up for a good hackathon — I took
          first place at the 7.1 Tech Hub Hackathon in 2025.
        </p>
      </>
    );
  }

  function getHobbiesCard() {
    return (
      <div
        className="flex flex-row flex-wrap justify-around"
        style={{ marginTop: '4rem' }}
      >
        {hobbies.map((hobby, index) => (
          <Card
            key={index}
            color={hobby.color}
            title={hobby.title}
            description={hobby.description}
            icon={hobby.icon}
          />
        ))}
      </div>
    );
  }

  return (
    <div id="home-card" className={`${SURFACE_CARD} mx-auto`}>
      <div className="flex flex-col justify-around">
        {paragraphs.map((item, index) => (
          <div key={index} className="p-4">
            <h5 className="font-bold">{item.title}</h5>
            {item.body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;

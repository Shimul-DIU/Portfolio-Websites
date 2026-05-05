import React from 'react';

const skills = [
  'UI/UX Design',
  'Front-End Development',
  'React',
  'Figma',
  'TypeScript',
  'Branding',
  'Responsive Design',
];

const stats = [
  { value: '5+', label: 'Years of experience' },
  { value: '30+', label: 'Projects delivered' },
  { value: '15+', label: 'Clients served' },
];

const About_me = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full">

        {/* Tag */}
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-700 bg-blue-50 px-4 py-1 rounded-full mb-6">
          About me
        </span>

        {/* Avatar Row */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 text-xl font-normal shrink-0">
            YN
          </div>
          <div>
            <p className="text-lg font-medium text-gray-900">Your Name</p>
            <p className="text-sm text-gray-500 mt-0.5">
              UI/UX Designer &amp; Developer · Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-normal text-gray-900 leading-snug mb-5">
          Crafting digital experiences that are{' '}
          <em>purposeful</em> and precise.
        </h2>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-blue-400 mb-6" />

        {/* Bio */}
        <p className="text-base text-gray-500 leading-relaxed mb-8">
          I am a{' '}
          <strong className="text-gray-900 font-medium">
            multidisciplinary designer and developer
          </strong>{' '}
          with a passion for building clean, functional, and meaningful digital
          products. With a strong foundation in both design and engineering, I
          bridge the gap between aesthetics and usability — creating interfaces
          that not only look refined but feel intuitive to use.
          <br />
          <br />
          My work is driven by a deep curiosity for problem-solving and a
          commitment to delivering{' '}
          <strong className="text-gray-900 font-medium">
            high-quality, user-centered solutions
          </strong>
          . Whether working independently or as part of a team, I bring
          thoroughness, creativity, and professionalism to every project I
          undertake.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-lg px-5 py-4">
              <p className="text-3xl font-normal text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm text-gray-500 border border-gray-200 rounded-full px-4 py-1"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="text-sm font-medium bg-gray-900 text-white px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
          >
            Get in touch →
          </a>
          <a
            href="#work"
            className="text-sm font-medium bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View my work
          </a>
        </div>

      </div>
    </section>
  );
};

export default About_me;

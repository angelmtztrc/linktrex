import React from 'react';
import data from '../api/data.json';
import SocialIcon from './SocialIcon';

const SocialIcons = () => {
  const { links } = data;
  return (
    <ul className="flex justify-center items-center mt-5 space-x-4">
      {links.map(link => (
        <li key={link.name}>
          <a
            href={link.url}
            className="text-gray-50 hover:text-green-200 transition-colors ease-out duration-300"
          >
            <SocialIcon icon={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;

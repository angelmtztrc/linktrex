import React from 'react';
import PropTypes from 'prop-types';
import SocialIcon from './SocialIcon';

const Link = ({ data }) => {
  const { icon, name, url } = data;
  return (
    <li className="px-4 py-3 w-full flex bg-white rounded relative">
      <div className="absolute">
        <SocialIcon className="text-gray-900" icon={icon} />
      </div>
      <div className="flex justify-center w-full">
        <a href={url} className="text-gray-900 font-nunito font-semibold">
          {name}
        </a>
      </div>
    </li>
  );
};

Link.propTypes = {
  data: PropTypes.exact({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default Link;

import React from 'react';

import data from '../api/data.json';
import Link from './Link';

const Links = () => {
  const { links } = data;
  return (
    <ul className="mt-5 flex flex-col list-none space-y-6">
      {links.map(link => (
        <Link key={link.name} data={link} />
      ))}
    </ul>
  );
};

export default Links;

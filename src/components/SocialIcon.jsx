import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@tabler/icons';

const SocialIcon = ({ icon, ...props }) => {
  const Icon = Icons[icon];
  return <Icon {...props} />;
};

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default SocialIcon;

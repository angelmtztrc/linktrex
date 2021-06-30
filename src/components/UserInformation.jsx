import React from 'react';
import { user } from '../api/data.json';

// images
import ProfilePicture from '../images/profile-picture.jpg';

const UserInformation = () => {
  const { username, position } = user;

  return (
    <div className="flex justify-center flex-col items-center">
      {/* You can add a custom property to the json file, instead of use a static value */}
      <img src={ProfilePicture} alt="" className="w-24 h-24 rounded-full" />
      <p className="mt-4 font-nunito text-white font-bold">@{username}</p>
      <p className="leading-relaxed font-nunito text-green-50 text-sm">{position}</p>
    </div>
  );
};

export default UserInformation;

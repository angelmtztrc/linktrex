import React from 'react';

// components
import UserInformation from './components/UserInformation';
import Links from './components/Links';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <main className="bg-gradient-to-br from-blue-500 to-green-600 min-h-screen flex justify-center">
      <div className=" max-w-xs w-full my-8">
        <UserInformation />
        <Links />
        <SocialIcons />
      </div>
    </main>
  );
}

export default App;

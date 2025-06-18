import React from 'react';

const About = () => {
  return (
   <div className="min-h-screen bg-[#dce3ea] flex items-center justify-center px-4">
  <div className="text-center max-w-xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2e455c]">
      About This App
    </h2>
    <p className="text-base md:text-l text-[#334155] mb-3">
      This application is built using React and React Router. It demonstrates how to create
      a multi-page single-page application (SPA) with dynamic data fetching from an external API.
    </p>
    <p className="text-base md:text-lg text-[#334155]">
      The User page fetches and displays user data from the JSONPlaceholder API. It is designed as a
      learning project for understanding routing, components, and API calls in React.
    </p>
  </div>
</div>

  );
};

export default About;

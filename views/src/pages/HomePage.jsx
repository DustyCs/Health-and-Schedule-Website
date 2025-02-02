import React from 'react';
import Loading from '../components/loading/Loading';
import Sidebar from '../components/sidebar';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold tracking-wide">Welcome to my site!</h1>
      <p className="text-2xl mt-4">This is a basic homepage created using React and Tailwind CSS.</p>
      <Sidebar />
    </div>
    
  );
};

export default HomePage;
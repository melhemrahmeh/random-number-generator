// src/App.tsx
import React from 'react';
import RandomNumberGenerator from './RandomNumberGenerator'; // Import the RandomFact component
import './index.css'; // Ensure Tailwind CSS is applied

const App: React.FC = () => {
  return (
    <div className="">
      <RandomNumberGenerator /> {/* Render the RandomFact component here */}
    </div>
  );
};

export default App;

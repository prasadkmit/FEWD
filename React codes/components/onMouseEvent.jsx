import React, { useState } from 'react';

function MouseEventDemo() {
  const [message, setMessage] = useState('');

  const handleMouseEnter = () => {
    setMessage('Mouse is over the button!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse left the button.');
  };

  return (
    <div className="p-4 text-center">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Hover over me
      </button>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}

export default MouseEventDemo;

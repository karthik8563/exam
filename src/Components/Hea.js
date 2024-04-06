import React from 'react';

function Hea() {
  return (
    <header>
      <h1>Gradebook Project</h1>
      <p>Date: {new Date().toLocaleDateString()}</p>
      {/* Add more header information as needed */}
    </header>
  );
}

export default Hea;
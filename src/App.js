import React, { useState } from 'react';
import Header from './Components/Hea';
import MainBlock from './Components/Mb';
import StatisticsBlock from './Components/sta';
import Footer from './Components/Foo';

function App() {
  
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <div className="App">
      <Header />
      <MainBlock />
      
      {showStatistics && <StatisticsBlock />}
      <button onClick={() => setShowStatistics(!showStatistics)}>
        {showStatistics ? "Hide Statistics" : "Show Statistics"}
      </button>
      <Footer />
    </div>
  );
}

export default App;
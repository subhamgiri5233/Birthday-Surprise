import React from 'react';
import Home from './pages/Home';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import TouchBurst from './components/TouchBurst';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <TouchBurst />
      <ScrollProgress />
      <Home />
    </div>
  );
}

export default App;

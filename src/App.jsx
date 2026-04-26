import React from 'react';
import Home from './pages/Home';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import TouchBurst from './components/TouchBurst';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <div className="App min-h-screen bg-romantic-dark">
      <FloatingShapes />
      <CustomCursor />
      <TouchBurst />
      <ScrollProgress />
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}

export default App;

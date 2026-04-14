import React from 'react';
import Home from './pages/Home';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <ScrollProgress />
      <Home />
    </div>
  );
}

export default App;

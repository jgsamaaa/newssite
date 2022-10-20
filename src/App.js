import React from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';

function App() {
  return (
    <div>
      <h1 className="title">See The Latest News</h1>
      <Menu />
      <NewsGrid />
    </div>
  );
}

export default App;

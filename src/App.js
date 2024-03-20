
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Header from './Components/Header';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home/>} />
          <Route path='detail/:id' caseSensitive={false}  element={<Detail/>} />
          <Route path='*' aseSensitive={false} element={<div>404 Not Found</div>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;

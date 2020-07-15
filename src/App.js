import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/movie-list/index.js';
const title = "Movie List";

function App() {
  return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <img alt="" src={logo} className="logo"/>
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <MovieList/>
      </div>
  );
}

export default App;

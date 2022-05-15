import Header from './header';
import Tabbar from './tabbar';
import List from './List';
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <div className="overlay">
        <p>This app doesn't support this screen size.<br/> 
        To enjoy the app, please acces with a larger screen. (minimum: 810px x 1024px)
        </p>
        </div>
      <Header />
      <List />

    <Tabbar />
    </div>
  );
  }



import React from 'react';
import './App.css';

import { PokeType } from 'models'
import { TypeDisplay } from 'components'

function App() {
  return (
    <div className="App">
      <TypeDisplay pokeType={ PokeType.Normal } />
      <TypeDisplay pokeType={ PokeType.Fighting } />
      <img alt="Artwork" src="/artworks/1.png"/>
    </div>
  );
}

export default App;

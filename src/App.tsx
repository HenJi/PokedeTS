import React from 'react';
import './App.css';

import { TypeDisplay } from 'components'
import { Pokemon } from 'models'
import { allPokemons } from 'data/DataSource'

const PokeDisplay = ({ pokemon }: { pokemon: Pokemon }) => (
  <div>
    <TypeDisplay pokeType={ pokemon.type1 } />
    { pokemon.type2 && <TypeDisplay pokeType={ pokemon.type2 } /> }
  </div>
)

function App() {
  return (
    <div className="App">
      { allPokemons.map(p => <PokeDisplay key={ p.name } pokemon={ p } />) }
    </div>
  );
}

export default App;

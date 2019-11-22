import React from 'react';

import { Layout, PokeList } from 'components'
import { allPokemons } from 'data/DataSource'

function App() {
  const displayed = allPokemons
    .filter(p => p.infos !== undefined)
  const content = <PokeList pokemons={ displayed } />
  return (
    <Layout>{ content }</Layout>
  );
}

export default App;

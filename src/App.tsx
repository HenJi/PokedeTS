import React from 'react';

import { Layout } from 'components'
import { PokeSearch } from 'views'
import { allPokemons } from 'data/DataSource'

function App() {
  const content = <PokeSearch pokemons={ allPokemons } />
  return (
    <Layout>{ content }</Layout>
  );
}

export default App;

import React from 'react';

import { Layout } from 'components'
import { PokeSearch, PokeDetail } from 'views'
import { allPokemons } from 'data/DataSource'

function App() {
  const content = (
    <>
      <PokeDetail pokemon={ allPokemons[0] } />
      <PokeSearch pokemons={ allPokemons } />
    </>
  )
  return (
    <Layout>{ content }</Layout>
  );
}

export default App;

import React from 'react';

import { Layout, MiniPokeDisplay } from 'components'
import { allPokemons } from 'data/DataSource'

function App() {
  const content = allPokemons
    .filter(p => p.infos !== undefined)
    .map(p => <MiniPokeDisplay key={ p.name } pokemon={ p } />)
  return (
    <Layout>{ content }</Layout>
  );
}

export default App;

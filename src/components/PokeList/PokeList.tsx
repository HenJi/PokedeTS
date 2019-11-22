import React from 'react'
import styled from 'styled-components/macro'

import { Pokemon } from 'models'
import { MiniPokeDisplay } from 'components'

interface Props {
  pokemons: Pokemon[]
}

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;

  > * {
    margin: 10px;
  }
`

export const PokeList: React.FunctionComponent<Props> = (props) => {
  const { pokemons } = props
  const content = pokemons.map(p => <MiniPokeDisplay key={ p.name } pokemon={ p } />)

  return (
    <ListWrapper>{ content }</ListWrapper>
  );
}

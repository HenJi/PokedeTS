import React from 'react'
import styled from 'styled-components/macro'

import { Pokemon } from 'models'
import { TypeDisplay } from 'components'
import { capitalize } from 'utils'

interface Props {
  pokemon: Pokemon
}

const MiniWrapper = styled.div`
  width: 100px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;

  img {
    width: 80px;
  }
`

const MiniTypes = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const MiniName = styled.div`
  text-align: center
  height: 20px;
`

export const MiniPokeDisplay: React.FunctionComponent<Props> = (props) => {
  const { pokemon } = props
  const { id, name, type1, type2 } = pokemon

  return (
    <MiniWrapper>
      <MiniTypes>
        <TypeDisplay pokeType={ type1 } mini />
        { type2 && <TypeDisplay pokeType={ type2 } mini /> }
      </MiniTypes>
      <img alt={ name } src={ `/sprites/${id}.png` } />
      <MiniName>{ capitalize(name) }</MiniName>
    </MiniWrapper>
  )
}

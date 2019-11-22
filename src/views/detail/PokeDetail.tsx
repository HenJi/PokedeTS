import React from 'react'
import styled from 'styled-components/macro'

import { Pokemon } from 'models'
import { capitalize } from 'utils'

interface Props {
  pokemon: Pokemon
}

const DetailWrapper = styled.div`
  display: flex;
  align-items: stretch;

  > img {
    margin-right: 20px;
  }
`

const InfosWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  flex-grow: 1;
`

export const PokeDetail: React.FunctionComponent<Props> = (props) => {
  const { pokemon } = props
  const { id, name } = pokemon

  return (
    <DetailWrapper>
      <img alt={ name } src={ `/artworks/${id}.png` } />
      <InfosWrapper>
        <h1>{ capitalize(name) }</h1>
      </InfosWrapper>
    </DetailWrapper>
  )
}

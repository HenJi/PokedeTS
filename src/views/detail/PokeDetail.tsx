import React from 'react'
import styled from 'styled-components/macro'
import { RouteComponentProps } from 'react-router-dom'

import { TypeDisplay } from 'components'
import { capitalize } from 'utils'
import { Lang } from 'utils/Lang'
import { allPokemons } from 'data/DataSource'

type Props = RouteComponentProps<{ id: string }>

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
  display: flex;
  flex-direction: column;

  table {
    margin: 10px 0;
  }
  th, td {
    height: 30px;
    vertical-align: middle;
  }
  th {
    width: 20%;
    font-weight: bold;
    text-align: right;
  }
  td {
    padding-left: 20px;
  }
`

const InfoTitle = styled.div`
  border-bottom: 1px solid black;
  text-align: center;
  font-size: 20px;
  padding: 10px;
`

const InfoTypes = styled.div`
  > * { margin-right: 10px; }
`

export const PokeDetail: React.FunctionComponent<Props> = (props) => {
  const { id } = props.match.params
  const pokemon = allPokemons.find(p => `${p.id}` === id || p.name === id)
  if (pokemon === undefined) {
    return <div>{ Lang.badPokemon }</div>
  }

  const { name, type1, type2 } = pokemon

  return (
    <DetailWrapper>
      <img alt={ name } src={ `/artworks/${pokemon.id}.png` } />
      <InfosWrapper>
        <InfoTitle>{ capitalize(name) }</InfoTitle>
        <table><tbody>
          <tr>
            <th>{ type2 ? Lang.pokeTypes : Lang.pokeType }</th>
            <td>
              <InfoTypes>
                <TypeDisplay pokeType={ type1 } />
                { type2 && <TypeDisplay pokeType={ type2 } /> }
              </InfoTypes>
            </td>
          </tr>
          <tr>
            <th>{ Lang.height }</th>
            <td>{ pokemon.height/10 } m</td>
          </tr>
          <tr>
            <th>{ Lang.weight }</th>
            <td>{ pokemon.weight/10 } kg</td>
          </tr>
        </tbody></table>
      </InfosWrapper>
    </DetailWrapper>
  )
}

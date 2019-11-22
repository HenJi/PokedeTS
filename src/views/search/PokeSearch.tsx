import React from 'react'
import styled from 'styled-components/macro'

import { Lang } from 'utils/Lang'
import { Pokemon } from 'models'
import { PokeList } from 'components'

const MAX_VISIBLE = 50

interface Props {
  pokemons: Pokemon[]
}

const InputWrapper = styled.div`
  padding: 20px 40px;
  display: flex;

  input {
    display: block;
    flex-grow: 1;
    max-width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #ddd;
    font-size: 16px;
    padding: 10px 16px;
  }
`

const MoreWrapper = styled.div`
  width: 100px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

export const PokeSearch: React.FunctionComponent<Props> = (props) => {
  const { pokemons } = props
  const [search, setSearch] = React.useState('')

  const valid = pokemons.filter(p => p.infos !== undefined)
  const filtered = search === '' ? valid : valid.filter(p => p.name.indexOf(search) >= 0)
  const hasMore = filtered.length > MAX_VISIBLE
  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setSearch(ev.currentTarget.value)
  }

  return (
    <>
      <InputWrapper>
        <input
          type="text" value={ search }
          onChange={ handleChange }
          placeholder={ Lang.writeName } />
      </InputWrapper>
      <PokeList pokemons={ filtered.slice(0, MAX_VISIBLE) }>
        { hasMore && <MoreWrapper>{ Lang.filterMore }</MoreWrapper>}
      </PokeList>
    </>
  );
}

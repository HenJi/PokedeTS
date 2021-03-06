import React from 'react'
import styled from 'styled-components/macro'

import { Lang } from 'utils/Lang'
import { PokeList } from 'components'
import { allPokemons } from 'data/DataSource'

const MAX_VISIBLE = 50

type Props = {}

const InputWrapper = styled.div`
  margin-bottom: 10px;
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

const MoreCell = styled.div`
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
  const [search, setSearch] = React.useState('')

  const valid = allPokemons.filter(p => p.infos !== undefined)
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
        { hasMore && <MoreCell>{ Lang.filterMore }</MoreCell>}
      </PokeList>
    </>
  );
}

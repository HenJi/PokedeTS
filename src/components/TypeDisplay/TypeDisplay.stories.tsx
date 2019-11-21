import React from 'react'
import { storiesOf } from '@storybook/react'

import { PokeType, pokeTypes } from 'models'
import { TypeDisplay } from './TypeDisplay'

storiesOf('TypeDisplay', module)
  .add('default', () => (
    <div>{
      pokeTypes.map(
        (t, idx) => <TypeDisplay key={ `type${t}` } pokeType={ t } />
      )
    }</div>
  ))
  .add('mini', () => (
    <div>{
      pokeTypes.map(
        (t, idx) => <TypeDisplay key={ `type${t}` } pokeType={ t } mini />
      )
    }</div>
  ))
  .add('hover', () => (
    <div>{
      pokeTypes.map(
        (t, idx) => <TypeDisplay key={ `type${t}` } pokeType={ t } hover />
      )
    }</div>
  ))

import React from 'react'
import styled from 'styled-components/macro'

import { PokeType } from 'models'
import { Lang } from 'utils/Lang'

interface Props {
  pokeType: PokeType
  mini?: boolean
  hover?: boolean
}

type TypeColor = [ string, string, string ]
const typeColors: { [key: string]: TypeColor } = {
  [PokeType.Normal]: ['#a8a878', '#8a8a59', '#79794e'],
  [PokeType.Fire]: ['#f08030', '#dd6610', '#b4530d'],
  [PokeType.Water]: ['#6890f0', '#386ceb', '#1753e3'],
  [PokeType.Electric]: ['#f8d030', '#f0c108', '#c19b07'],
  [PokeType.Grass]: ['#78c850', '#5ca935', '#4a892b'],
  [PokeType.Ice]: ['#98d8d8', '#69c6c6', '#45b6b6'],
  [PokeType.Fighting]: ['#c03028', '#9d2721', '#82211b'],
  [PokeType.Poison]: ['#a040a0', '#803380', '#662966'],
  [PokeType.Ground]: ['#e0c068', '#d4a82f', '#aa8623'],
  [PokeType.Flying]: ['#a890f0', '#9180c4', '#7762b6'],
  [PokeType.Psychic]: ['#f85888', '#f61c5d', '#d60945'],
  [PokeType.Bug]: ['#a8b820', '#8d9a1b', '#616b13'],
  [PokeType.Rock]: ['#b8a038', '#93802d', '#746523'],
  [PokeType.Ghost]: ['#705898', '#554374', '#413359'],
  [PokeType.Dragon]: ['#7038f8', '#4c08ef', '#3d07c0'],
  [PokeType.Steel]: ['#b8b8d0', '#9797ba', '#7a7aa7'],
  [PokeType.Dark]: ['#705848', '#513f34', '#362a23'],
  [PokeType.Fairy]: ['#e898e8', '#de6ede', '#d547d5'],
}

interface StyleProps {
  color1: string
  color2: string
  color3: string
  hover: boolean
  mini: boolean
}

const tagStyle = `
  text-transform: uppercase;
  border-radius: 4px;
  padding: 2px;
  text-align: center;
  color: #fff;
  font-size: 10px;
  line-height: 14px;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
`

const InnerTypeDisplay = styled.span`
  ${ tagStyle }
  width: ${(props: StyleProps) => props.mini ? 'auto' : '6em' };
  background-image: ${(props: StyleProps) => `linear-gradient(${props.color1}, ${props.color2})` };
  border-color: ${(props: StyleProps) => props.color3 };

  &:hover {
    color: ${(props: StyleProps) => props.hover ? props.color3 : undefined }
  }
`
export const TypeDisplay: React.FunctionComponent<Props> = (props) => {
  const { pokeType, mini = false, hover = false } = props
  const [ color1, color2, color3 ] = typeColors[pokeType]
  const text = mini ? Lang.miniTypes[pokeType] : Lang.types[pokeType]
  return (
    <InnerTypeDisplay { ...{ color1, color2, color3, hover, mini }}>
      { text }
    </InnerTypeDisplay>
  )
}

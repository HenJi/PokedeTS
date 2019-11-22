import { PokeType } from './PokeType'
import { Stats } from './Stats'
import { Infos } from './Infos'

export interface Pokemon {
  id: number
  name: string
  specie: number
  height: number
  weight: number
  order: number
  type1: PokeType
  type2?: PokeType
  stats: Stats
  infos?: Infos // Only for base forms
}

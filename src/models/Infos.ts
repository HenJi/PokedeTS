import { BodyShape } from './BodyShape'
import { Color } from './Color'

export interface Infos {
  generation: number
  evoFamily: number
  evoFrom?: number
  color: Color
  shape: BodyShape
}

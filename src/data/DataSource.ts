import { Pokemon, Infos } from 'models'

import { csvData } from './csvData'

const readNum = (src: string): number | undefined =>
  (+src)+'' === src ? +src : undefined

function readLine(line: string): Pokemon | undefined {
  const dataParts = line.split(',')
  if (dataParts.length < 21) return undefined
  const dataNums = dataParts.map(readNum)
  const name = dataParts[1]
  const [
    // eslint-disable-next-line
    id, _name, specie, height, weight, _xp,
    order, isBase, type1, type2,
    hp, attack, defense, attackSpe, defenseSpe, speed,
    generation, evoFamily, evoFrom, color, shape,
  ] = dataNums
  if ( id && specie && height && weight && order && type1
    && hp && attack && defense && attackSpe && defenseSpe && speed ) {
    const infos: Infos | undefined =
      isBase === 1 && generation && evoFamily && color && shape
      ? { generation, evoFamily, evoFrom, color, shape }
      : undefined
    return {
      id, name, specie, height, weight,
      order, type1, infos,
      type2: type2 === 0 ? undefined : type2,
      stats: { hp, attack, defense, attackSpe, defenseSpe, speed },
    }
  } else return undefined
}

export const allPokemons: Pokemon[] = csvData
  .split('\n')
  .map(readLine)
  .filter(v => v !== undefined) as Pokemon[]

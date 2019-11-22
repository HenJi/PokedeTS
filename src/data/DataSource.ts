import { Pokemon, Infos, PokeType, Stats } from 'models'

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

const computeAverages = (t: PokeType): Stats => {
  const statsOfTypes = allPokemons
    .filter(p => p.infos !== undefined)
    .filter(p => p.type1 === t || p.type2 === t)
    .map(p => p.stats)
  const zeroStats: Stats = { hp: 0, attack: 0, defense: 0, attackSpe: 0, defenseSpe: 0, speed: 0 }
  const sums = statsOfTypes.reduce(
    (acc, s) => ({
      hp: acc.hp + s.hp,
      attack: acc.attack + s.attack,
      defense: acc.defense + s.defense,
      attackSpe: acc.attackSpe + s.attackSpe,
      defenseSpe: acc.defenseSpe + s.defenseSpe,
      speed: acc.speed + s.speed,
    }), zeroStats)
  return {
    hp: sums.hp / statsOfTypes.length,
    attack: sums.attack / statsOfTypes.length,
    defense: sums.defense / statsOfTypes.length,
    attackSpe: sums.attackSpe / statsOfTypes.length,
    defenseSpe: sums.defenseSpe / statsOfTypes.length,
    speed: sums.speed / statsOfTypes.length,
  }
}

export const typeAverageStats: { [key in PokeType]: Stats } = {
  [PokeType.Normal]: computeAverages(PokeType.Normal),
  [PokeType.Fire]: computeAverages(PokeType.Fire),
  [PokeType.Water]: computeAverages(PokeType.Water),
  [PokeType.Electric]: computeAverages(PokeType.Electric),
  [PokeType.Grass]: computeAverages(PokeType.Grass),
  [PokeType.Ice]: computeAverages(PokeType.Ice),
  [PokeType.Fighting]: computeAverages(PokeType.Fighting),
  [PokeType.Poison]: computeAverages(PokeType.Poison),
  [PokeType.Ground]: computeAverages(PokeType.Ground),
  [PokeType.Flying]: computeAverages(PokeType.Flying),
  [PokeType.Psychic]: computeAverages(PokeType.Psychic),
  [PokeType.Bug]: computeAverages(PokeType.Bug),
  [PokeType.Rock]: computeAverages(PokeType.Rock),
  [PokeType.Ghost]: computeAverages(PokeType.Ghost),
  [PokeType.Dragon]: computeAverages(PokeType.Dragon),
  [PokeType.Steel]: computeAverages(PokeType.Steel),
  [PokeType.Dark]: computeAverages(PokeType.Dark),
  [PokeType.Fairy]: computeAverages(PokeType.Fairy),
}
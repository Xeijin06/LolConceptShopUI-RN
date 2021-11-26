import { Character } from "../interfaces/interface";


export const filterArr: string[] = [
  'Destacados',
  'Campeones',
  'Aspectos',
  'Botín',
  'Gestos',
];

export const fileterdCharactersArr: Character[] = [
  {
    name: 'Xayah Guardiana Estelar',
    cost: 1820,
    image: require('../assets/images/xayah.png'),
  },
  {
    name: 'Rakan Guardián Estelar',
    cost: 1820,
    image: require('../assets/images/rakan.png'),
  },
  {
    name: 'Rakan Guardián Estelar1',
    cost: 1820,
    image: require('../assets/images/rakan.png'),
  },
];

export const mostSelled: Character[] = [
  {
    name: 'Neeko Guardiana Estelar',
    cost: 1350,
    image: require('../assets/images/neeko.png'),
    tag: 'Popular',
  },
  {
    name: 'Zoe Guardiana Estelar',
    cost: 1350,
    image: require('../assets/images/zoe.png'),
    tag: 'Popular',
  },
  {
    name: 'Ahri Guardiana Estelar',
    cost: 1274,
    image: require('../assets/images/ahri.png'),
    tag: '-30%',
  },
  {
    name: 'Rakan Guardián Estelar',
    cost: 1820,
    image: require('../assets/images/rakan.png'),
    tag: '-20%',
  },
];

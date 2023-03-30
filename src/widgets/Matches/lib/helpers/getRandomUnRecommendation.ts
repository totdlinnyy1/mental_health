import {unrecommendations} from '@widgets/Matches/consts/consts'

const getRandomUnRecommendation = (): string =>
  unrecommendations[Math.floor(Math.random() * unrecommendations.length)]

export default getRandomUnRecommendation

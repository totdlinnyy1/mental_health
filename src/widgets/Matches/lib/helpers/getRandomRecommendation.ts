import {recommendations} from '@widgets/Matches/consts/consts'

const getRandomRecommendation = (): string =>
  recommendations[Math.floor(Math.random() * recommendations.length)]

export default getRandomRecommendation

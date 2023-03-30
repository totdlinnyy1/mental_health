import {fakeUser} from '@src/share'
import getRandomRecommendation from '@widgets/Matches/lib/helpers/getRandomRecommendation'
import getRandomUnRecommendation from '@widgets/Matches/lib/helpers/getRandomUnRecommendation'
import getResume from '@widgets/Matches/lib/helpers/getResume'
import {HobbyAnswers, IMatchResult} from '@widgets/Matches/types/types'

const getMatchResult = (
  userAnswers: HobbyAnswers,
  matchedUserAnswers: HobbyAnswers
): IMatchResult => {
  const maxMatch = 10
  const maxPercent = 100

  let match = 0

  Object.entries(userAnswers).forEach(([key, value]) => {
    // @ts-ignore
    if (matchedUserAnswers[key] === value) {
      match++
    }
  })

  match = (match * maxPercent) / maxMatch

  const recommendations = [
    getRandomRecommendation(),
    getRandomRecommendation(),
    getRandomRecommendation()
  ]
  const unrecommendation = getRandomUnRecommendation()
  const resume = getResume(match)

  return {
    match,
    resume,
    recommendations,
    unrecommendation,
    matchedUserData: fakeUser
  }
}

export default getMatchResult

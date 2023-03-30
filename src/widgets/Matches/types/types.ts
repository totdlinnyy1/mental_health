import {HobbyQuestionsLabel} from '@widgets/Matches/consts/consts'

export type HobbyQuestion = (typeof HobbyQuestionsLabel)[number]

export type HobbyAnswers = {
  [question in (typeof HobbyQuestionsLabel)[number]]: '0' | '1'
}

export type MatchModalContent = 'test' | 'result'

export interface IMatchResult {
  match: number
  resume: string
  recommendations: string[]
  unrecommendation: string
  matchedUserData: {
    name: string
    lastName: string
    avatar: string
  }
}

import {HobbyQuestionsLabel} from '@widgets/Matches/consts/consts'

export type HobbyQuestion = (typeof HobbyQuestionsLabel)[number]

export type HobbyAnswers = {
  [question in (typeof HobbyQuestionsLabel)[number]]: boolean
}

export type MatchModalContent = 'test' | 'result'

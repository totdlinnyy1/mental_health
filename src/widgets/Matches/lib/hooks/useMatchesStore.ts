import {create} from 'zustand'

import {ITestsStore} from '@entities/Tests'
import {HobbyAnswers, MatchModalContent} from '@widgets/Matches/types/types'

interface IMatchState extends ITestsStore {
  testResult?: HobbyAnswers
  result?: {
    match: number
    resume: string
    recommendations: string[]
    unRecommendation: string
  }
  onCompleted: (data: HobbyAnswers) => void
  changeModalContent: (content: MatchModalContent) => void
  modalContent: MatchModalContent
}

const useMatchesStore = create<IMatchState>(set => ({
  modalContent: 'test',
  isModalOpen: false,
  isCompleted: false,
  onOpen: (): void => set(() => ({isModalOpen: true})),
  onClose: (): void => set(() => ({isModalOpen: false})),
  onCompleted: (data: HobbyAnswers): void => set(() => ({testResult: data})),
  changeModalContent: (modalContent): void => set(() => ({modalContent}))
}))

export default useMatchesStore

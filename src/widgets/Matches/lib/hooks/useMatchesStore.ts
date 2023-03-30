import {create} from 'zustand'

import {ITestsStore} from '@entities/Tests'
import getMatchResult from '@widgets/Matches/lib/helpers/getMatchResult'
import {
  HobbyAnswers,
  IMatchResult,
  MatchModalContent
} from '@widgets/Matches/types/types'

interface IMatchState extends ITestsStore {
  testResult?: HobbyAnswers
  matchResult?: IMatchResult
  onCompleted: (data: HobbyAnswers) => void
  changeModalContent: (content: MatchModalContent) => void
  modalContent: MatchModalContent
  onShowMatch: (data: HobbyAnswers) => void
}

const useMatchesStore = create<IMatchState>(set => ({
  modalContent: 'test',
  isModalOpen: false,
  isCompleted: false,
  onOpen: (): void => set(() => ({isModalOpen: true})),
  onClose: (): void => set(() => ({isModalOpen: false})),
  onCompleted: (data: HobbyAnswers): void =>
    set(() => ({testResult: data, isCompleted: true})),
  changeModalContent: (modalContent): void => set(() => ({modalContent})),
  onShowMatch: (data): void =>
    set(({testResult}) => {
      if (testResult) {
        const matchResult = getMatchResult(testResult, data)
        return {matchResult, modalContent: 'result', isModalOpen: true}
      }
      return {}
    })
}))

export default useMatchesStore

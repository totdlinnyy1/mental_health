import {create} from 'zustand'

import {
  getNextStage,
  getPrevStage,
  IProgressCategories,
  EnterTestStage,
  EnterTestStages
} from '../../../../entities/Tests'

interface IEnterTestState extends IProgressCategories {
  stage: EnterTestStage
  isModalOpen: boolean
  isCompleted: boolean
  onOpen: () => void
  onClose: () => void
  onNextStage: () => void
  onPrevStage: () => void
  onSaveCurrent: (data: IProgressCategories) => void
  onSaveWish: (data: IProgressCategories) => void
  onSaveResults: () => void
}

const useEnterTestStore = create<IEnterTestState>(set => ({
  stage: 'info',
  isModalOpen: false,
  isCompleted: false,
  health: {current: 0, wish: 0},
  work: {current: 0, wish: 0},
  relationship: {current: 0, wish: 0},
  creativity: {current: 0, wish: 0},
  onOpen: (): void => set(() => ({isModalOpen: true})),
  onClose: (): void => set(() => ({isModalOpen: false})),
  onNextStage: (): void =>
    set(({stage}) => ({
      stage: getNextStage(stage, EnterTestStages) as EnterTestStage
    })),
  onPrevStage: (): void =>
    set(({stage}) => ({
      stage: getPrevStage(stage, EnterTestStages) as EnterTestStage
    })),
  onSaveCurrent: (data): void => set(() => ({...data})),
  onSaveWish: (data): void => set(() => ({...data})),
  onSaveResults: (): void => set(() => ({isCompleted: true}))
}))

export default useEnterTestStore

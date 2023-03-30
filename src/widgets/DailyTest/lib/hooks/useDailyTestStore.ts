import {create} from 'zustand'

import {
  getNextStage,
  getPrevStage,
  ITestsStore,
  DailyTestStages,
  IDailyTestResult,
  Category,
  DailyTestStage,
  maxCountOfDailyTasks,
  minCountOfDailyTasks
} from '@entities/Tests'
import {IntRange} from '@src/share'

interface IDailyTestState extends ITestsStore, IDailyTestResult {
  stage: DailyTestStage
  onSaveCategory: (category: Category) => void
  onSaveTaskCount: (
    taskCount: IntRange<
      typeof minCountOfDailyTasks,
      typeof maxCountOfDailyTasks
    >
  ) => void
  onCompleted: () => void
}

const useDailyTestStore = create<IDailyTestState>(set => ({
  stage: 'category',
  isModalOpen: false,
  isCompleted: false,
  onOpen: (): void => set(() => ({isModalOpen: true})),
  onClose: (): void => set(() => ({isModalOpen: false})),
  onNextStage: (): void =>
    set(({stage}) => ({
      stage: getNextStage(stage, DailyTestStages) as DailyTestStage
    })),
  onPrevStage: (): void =>
    set(({stage}) => ({
      stage: getPrevStage(stage, DailyTestStages) as DailyTestStage
    })),
  onCompleted: (): void => set(() => ({isCompleted: true})),
  onSaveCategory: (category): void => set(() => ({category})),
  onSaveTaskCount: (taskCount): void => set(() => ({taskCount}))
}))

export default useDailyTestStore

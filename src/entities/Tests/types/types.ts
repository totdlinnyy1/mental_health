import {IntRange} from '../../../share'
import {
  Categories,
  DailyTestStages,
  EnterTestStages,
  maxCountOfDailyTasks,
  minCountOfDailyTasks
} from '../consts/consts'

export type EnterTestStage = (typeof EnterTestStages)[number]
export type DailyTestStage = (typeof DailyTestStages)[number]

export type Category = (typeof Categories)[number]

export interface IProgress {
  current: number
  wish: number
}

export type ProgressCategories = {
  [category in (typeof Categories)[number]]: IProgress
}

export interface IDailyTestResult {
  category?: Category
  taskCount?: IntRange<typeof minCountOfDailyTasks, typeof maxCountOfDailyTasks>
}

export interface ITestStagesControl {
  onNextStage: () => void
  onPrevStage: () => void
}

export interface ITestsStore {
  isModalOpen: boolean
  isCompleted: boolean
  onOpen: () => void
  onClose: () => void
}

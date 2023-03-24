import {EnterTestStages} from '../consts/consts'

export type EnterTestStage = (typeof EnterTestStages)[number]

export interface IProgress {
  current: number
  wish: number
}

export interface IProgressCategories {
  health: IProgress
  relationship: IProgress
  work: IProgress
  creativity: IProgress
}

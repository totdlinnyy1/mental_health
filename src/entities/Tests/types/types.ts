import {Stages} from '../consts/consts'

export type Stage = (typeof Stages)[number]

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

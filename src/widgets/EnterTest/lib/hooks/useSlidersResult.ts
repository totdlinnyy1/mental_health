import {Dispatch, SetStateAction} from 'react'

import {ProgressCategories} from '@entities/Tests/index'

interface ISliderHookData {
  onChange: Dispatch<SetStateAction<ProgressCategories>>
  data: ProgressCategories
  isHaveCurrent: boolean
}

interface ISliderHookReturn {
  onChangeHealth: (value: number) => void
  onChangeRelationship: (value: number) => void
  onChangeWork: (value: number) => void
  onChangeCreativity: (value: number) => void
}

const useSliderResult = ({
  onChange,
  data,
  isHaveCurrent
}: ISliderHookData): ISliderHookReturn => {
  const checkIsHaveCurrent = (current: number, value: number): number =>
    isHaveCurrent ? current : value

  const onChangeHealth = (value: number): void => {
    onChange(prevState => ({
      ...prevState,
      health: {
        current: checkIsHaveCurrent(data.health.current, value),
        wish: value
      }
    }))
  }

  const onChangeRelationship = (value: number): void => {
    onChange(prevState => ({
      ...prevState,
      relationship: {
        current: checkIsHaveCurrent(data.relationship.current, value),
        wish: value
      }
    }))
  }

  const onChangeWork = (value: number): void => {
    onChange(prevState => ({
      ...prevState,
      work: {current: checkIsHaveCurrent(data.work.current, value), wish: value}
    }))
  }

  const onChangeCreativity = (value: number): void => {
    onChange(prevState => ({
      ...prevState,
      creativity: {
        current: checkIsHaveCurrent(data.creativity.current, value),
        wish: value
      }
    }))
  }
  return {
    onChangeHealth,
    onChangeCreativity,
    onChangeRelationship,
    onChangeWork
  }
}

export default useSliderResult

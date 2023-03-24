import getNumberWithPercent from '../../../../share/lib/helpers/getNumberWithPercent'

const getProgressBarHeight = (wish: number, current: number): string => {
  if (wish > current) {
    return getNumberWithPercent(wish)
  }

  return getNumberWithPercent(current)
}

export default getProgressBarHeight

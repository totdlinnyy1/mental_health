import {getNumberWithPercent} from '@share/index'

/**
 * Возвращает ширину слайдера для желаемых значений
 */
const getWidthForSlider = (width: number): string => {
  const percent = 100
  const value = percent - width
  return getNumberWithPercent(value)
}

export default getWidthForSlider

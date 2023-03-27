/**
 * Возвращает ширину слайдера для желаемых значений
 */
const getWidthForSlider = (width: number): string => {
  const percent = 100
  const value = percent - width
  return value + '%'
}

export default getWidthForSlider

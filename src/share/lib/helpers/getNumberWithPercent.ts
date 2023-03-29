/**
 * Возвращает число со знаком процента
 * Если числа нет, то возвращает 0%
 * Если число выходит за границы [0-100], то возвращает граничное значение
 */
const getNumberWithPercent = (percent: number): string => {
  const minPercent = 0
  const maxPercent = 100

  if (!percent) {
    return '0%'
  }

  if (percent < minPercent) {
    return minPercent + '%'
  }

  if (percent > maxPercent) {
    return maxPercent + '%'
  }

  return percent + '%'
}

export default getNumberWithPercent

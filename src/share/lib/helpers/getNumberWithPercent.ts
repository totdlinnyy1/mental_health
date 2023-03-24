// concatenate number of percent with percent symbol
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

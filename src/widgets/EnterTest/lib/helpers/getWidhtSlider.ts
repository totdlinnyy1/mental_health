const getWidthForSlider = (widht: number, elem: string): string => {
  const wholeWidth = 420
  const persent = 100

  if (elem === 'current') {
    const value = wholeWidth * (widht / persent)
    return value + 'px'
  }

  if (elem === 'wish') {
    const value = wholeWidth * (1 - widht / persent)
    return value + 'px'
  }

  return widht + 'px'
}

export default getWidthForSlider

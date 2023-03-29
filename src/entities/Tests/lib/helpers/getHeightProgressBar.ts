// in order to find out what the length of the strip will be, we need to know the %
// of filling and the length of the parent

const getHeightProgressBar = (
  childHeightPercent: number,
  number: number
): string => {
  const maxHeight = 100
  const childHeight = (childHeightPercent / maxHeight) * number
  return childHeight + 'px'
}

export default getHeightProgressBar

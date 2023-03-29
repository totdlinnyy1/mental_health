// in order to find out what the length of the strip will be, we need to know the %
// of filling and the length of the parent

const getHeightProgressBar = (
  childHeightPercent: number,
  parrentHeight: number
): string => {
  const childHeight = (childHeightPercent / 100) * parrentHeight
  return childHeight + 'px'
}

export default getHeightProgressBar

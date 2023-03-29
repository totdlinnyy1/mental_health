// для того, чтобы узнать, какой выботы будет progressBar, нам нужно знать % заполнения
// и длину ГЛАВНОГО родителя

const getHeightProgressBar = (
  childHeightPercent: number,
  parrentHeight: number
): string => {
  const percent = 100
  const childHeight = (childHeightPercent / percent) * parrentHeight
  return childHeight + 'px'
}

export default getHeightProgressBar

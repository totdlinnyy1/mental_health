// Возвращает предыдущий этап тестирования
const getNextStage = (
  currentStage: string,
  stages: readonly string[]
): string => {
  const currentStageIndex = stages.indexOf(currentStage)

  if (currentStageIndex - 1 > 0) {
    return stages[currentStageIndex - 1]
  }

  return stages[0]
}

export default getNextStage

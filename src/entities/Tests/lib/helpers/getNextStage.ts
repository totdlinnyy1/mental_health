/**
 * Возвращает следующий этап тестирования
 * Если следующего этапа нет, то возвращает последний этап
 */
const getNextStage = (
  currentStage: string,
  stages: readonly string[]
): string => {
  const currentStageIndex = stages.indexOf(currentStage)

  if (currentStageIndex + 1 < stages.length) {
    return stages[currentStageIndex + 1]
  }

  return stages[stages.length - 1]
}

export default getNextStage

import {ICurrentAndLinkRoute} from '../../types/types'

// Возвращает bold, если ссылка активна и normal если ссылка не активна
const isLinkActive = (data: ICurrentAndLinkRoute): 'normal' | 'bold' => {
  if (data.currentRoute !== undefined) {
    if (data.currentRoute === data.route) {
      return 'bold'
    }
  }
  return 'normal'
}

export default isLinkActive

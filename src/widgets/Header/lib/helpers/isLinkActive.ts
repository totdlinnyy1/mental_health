import {ICurrentAndLinkRoute} from '../../types/types'

// if current app route equal route in link than link will be bold
const isLinkActive = (data: ICurrentAndLinkRoute): 'normal' | 'bold' => {
  if (data.currentRoute !== undefined) {
    if (data.currentRoute === data.route) {
      return 'bold'
    }
  }
  return 'normal'
}

export default isLinkActive

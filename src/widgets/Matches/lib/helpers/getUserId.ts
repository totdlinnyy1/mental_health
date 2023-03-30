// Возвращает id пользователя из параметров ссылки
const getUserId = (link: string): string => {
  const url = new URL(link)
  const params = new URLSearchParams(url.search)
  const userId = params.get('user')

  if (userId && userId !== '') {
    return userId
  }

  return ''
}

export default getUserId

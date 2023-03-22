import isLinkActive from './isLinkActive'

describe('Is link active test', () => {
  test('link active', () => {
    const route = '/'
    const currentRoute = '/'
    expect(isLinkActive({currentRoute, route})).toBe('bold')
  })

  test('link inactive', () => {
    const route = '/'
    const currentRoute = '/another'
    expect(isLinkActive({currentRoute, route})).toBe('normal')
  })

  test('current route is undefined', () => {
    const route = '/'
    const currentRoute = undefined
    expect(isLinkActive({currentRoute, route})).toBe('normal')
  })
})

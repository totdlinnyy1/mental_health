import ProgressBar from './ProgressBar'
import {render} from '@testing-library/react'

describe('Test progress bar', () => {
  test('render progress bar elem', () => {
    render(<ProgressBar />)
  })
})

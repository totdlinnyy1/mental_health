import {resumes} from '@widgets/Matches/consts/consts'

const getResume = (percent: number): string => {
  const divider = 10
  if (Math.floor(percent / divider) === divider) {
    return resumes[resumes.length - 1]
  }
  return resumes[Math.floor(percent / divider)]
}

export default getResume

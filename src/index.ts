import { DEFAULT_OPTIONS } from './constant'

type WlbOptions = {
  startWorkingTime: number
  endWorkingTime: number
  ignoreWeekend: boolean
  warningMessage: string
  replaceOriginBundle: boolean
}

export default (options: WlbOptions = DEFAULT_OPTIONS) => {
  return {
    name: 'vite-plugin-wlb'
  }
}

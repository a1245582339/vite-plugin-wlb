import chalk from 'chalk'
import { generateCode } from './codegen'
import { DEFAULT_OPTIONS } from './constant'

type WlbOptions = {
  startWorkingTime?: number
  endWorkingTime?: number
  ignoreWeekend?: boolean
  warningMessage?: string
}

export default (options: WlbOptions = DEFAULT_OPTIONS) => {
  return {
    name: 'vite-plugin-wlb',
    transformIndexHtml(html: string) {
      const {
        startWorkingTime,
        endWorkingTime,
        ignoreWeekend,
        warningMessage
      } = { ...DEFAULT_OPTIONS, ...options }
      let content = html
      const date = new Date()
      const day = date.getDay()
      const hour = date.getHours()
      const isWorkdays = day <= 4 || ignoreWeekend
      const isWorkOvertime =
        !isWorkdays || hour < startWorkingTime || hour >= endWorkingTime
      if (isWorkOvertime) {
        console.log(chalk.red(warningMessage))
        content = generateCode()
      }
      return content
    }
  }
}

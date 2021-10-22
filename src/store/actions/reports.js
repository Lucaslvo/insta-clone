import { ADD_REPORT } from './actionTypes'

export const addReport = report => {
  return {
    type: ADD_REPORT,
    payload: report
  }
}
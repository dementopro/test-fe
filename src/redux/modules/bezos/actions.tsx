import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const getAllBezosCompanies = createAction(CONSTANTS.GET_ALL_BEZOS_COMPANIES)
export const setBezosCompanies = createAction(CONSTANTS.SET_BEZOS_COMPANIES)

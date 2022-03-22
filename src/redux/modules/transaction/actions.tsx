import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const getAllTransactions = createAction(CONSTANTS.GET_ALL_TRANSACTIONS)
export const updateDatabase = createAction(CONSTANTS.UPDATE_DATABASE)

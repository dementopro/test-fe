import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from '../../api/request'
import * as CONSTANTS from './constants'

const initialState = () => {
  return {
    transactions: [],
    status: 'INIT',
  }
}

export default handleActions({
  [requestSuccess(CONSTANTS.GET_ALL_TRANSACTIONS)]: (state, { payload }: any) => ({
    ...state,
    status: 'SUCCESS',
    transactions: payload
  }),
  [requestFail(CONSTANTS.GET_ALL_TRANSACTIONS)]: (state, { payload }: any) => ({
    ...state,
    status: 'FAIL'
  }),
  [requestSuccess(CONSTANTS.UPDATE_DATABASE)]: (state, { payload }: any) => ({
    ...state,
    status: 'SUCCESS'
  }),
  [requestFail(CONSTANTS.UPDATE_DATABASE)]: (state, { payload }: any) => ({
    ...state,
    status: 'FAIL'
  }),
}, initialState())

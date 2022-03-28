import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from '../../api/request'
import * as CONSTANTS from './constants'

const initialState = () => {
  return {
    status: 'INIT',
    bezosCompanies: [],
  }
}

export default handleActions({
  [requestSuccess(CONSTANTS.GET_ALL_BEZOS_COMPANIES)]: (state, { payload }: any) => ({
    ...state,
    status: 'SUCCESS',
    bezosCompanies: payload
  }),
  [requestFail(CONSTANTS.GET_ALL_BEZOS_COMPANIES)]: (state, { payload }: any) => ({
    ...state,
    status: 'FAIL'
  }),
  [requestSuccess(CONSTANTS.SET_BEZOS_COMPANIES)]: (state, { payload }: any) => ({
    ...state,
    status: 'SUCCESS',
    bezosCompanies: payload
  }),
  [requestFail(CONSTANTS.SET_BEZOS_COMPANIES)]: (state, { payload }: any) => ({
    ...state,
    status: 'FAIL'
  }),
}, initialState())

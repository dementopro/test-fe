import { takeEvery } from 'redux-saga/effects'
import * as CONSTANTS from '../modules/bezos/constants'
import apiCall from '../api/apiCall'

const getList = apiCall({
  type: CONSTANTS.GET_ALL_BEZOS_COMPANIES,
  method: 'get',
  path: 'bezos'
})

const doSetBezosCompanies = apiCall({
  type: CONSTANTS.SET_BEZOS_COMPANIES,
  method: 'post',
  path: 'bezos'
})

export default function* rootSaga() {
  yield takeEvery(CONSTANTS.GET_ALL_BEZOS_COMPANIES, getList)
  yield takeEvery(CONSTANTS.SET_BEZOS_COMPANIES, doSetBezosCompanies)
}

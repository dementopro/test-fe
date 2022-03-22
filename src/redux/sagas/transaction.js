import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from '../modules/transaction/constants'
import apiCall from '../api/apiCall'

const getList = apiCall({
  type: CONSTANTS.GET_ALL_TRANSACTIONS,
  method: 'get',
  path: 'transactions'
})

const doUpdateDatabase = apiCall({
  type: CONSTANTS.UPDATE_DATABASE,
  method: 'post',
  path: 'transactions'
})

export default function* rootSaga () {
  yield takeLatest(CONSTANTS.GET_ALL_TRANSACTIONS, getList)
  yield takeLatest(CONSTANTS.UPDATE_DATABASE, doUpdateDatabase)
}

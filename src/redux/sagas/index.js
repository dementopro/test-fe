import { all } from 'redux-saga/effects'
import transaction from './transaction'

export default function* rootSaga () {
  yield all([
    transaction()
  ])
}

import { all } from 'redux-saga/effects'
import transaction from './transaction'
import bezos from './bezos'

export default function* rootSaga () {
  yield all([
    transaction(),
    bezos()
  ])
}

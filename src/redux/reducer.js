import { combineReducers } from 'redux'

import transaction from './modules/transaction/reducers'
import bezos  from './modules/bezos/reducers'

export default combineReducers({
  transaction,
  bezos
})

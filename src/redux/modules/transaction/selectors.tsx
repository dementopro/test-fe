import {get} from 'lodash'

export const transactionListSelector = (state: any) =>
  get(state, 'transaction.transactions', [])

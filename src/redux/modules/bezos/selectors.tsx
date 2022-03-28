import {get} from 'lodash'

export const bezosCompaniesSelector = (state: any) =>
  get(state, 'bezos.bezosCompanies', [])

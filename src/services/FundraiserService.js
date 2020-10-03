import qs from 'qs'
import BaseService from './BaseService'

export default class FundraiserService extends BaseService {
  constructor() {
    super('fundraisers')
  }

  async search(queryObj) {
    const query = qs.stringify(queryObj)

    const res = await this.http.get(`/pages/search?${query}`)
    return res.data
  }
}
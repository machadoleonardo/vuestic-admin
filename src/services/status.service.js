import axios from 'axios'

const API_URL = 'http://6153b404-7b43-41f1-84bb-a8ac5eeee96b.mock.pstmn.io/migration/'

class StatusService {
  getStatusProcessing () {
    return axios.get(API_URL + 'status')
  }

  getBatches () {
    return axios.get(API_URL + 'batches')
  }

  getBatchById (id) {
    return axios.post(API_URL + 'batches/batch', { params: { idBatch: id } })
  }

  getBatchesByStatus (status) {
    return axios.post(API_URL + 'batches/status', { params: { status: status } })
  }
}

export default new StatusService()

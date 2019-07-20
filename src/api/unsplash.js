import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization:  'Client-ID cbe83ab2cb094117a58d6947c6d57713aad76b214262e2bcbcb2edf11a99b1b1',
      }
})

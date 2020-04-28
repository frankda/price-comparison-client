import axios from 'axios';

const SERVER_URL = 'https://price-before-you-go.herokuapp.com/search';
const TEST_SERVER_URL = 'http://localhost:3001/search'

const Scrape = {
  searchProduct(productname) {
    return axios.post(TEST_SERVER_URL, { productname: productname });  // send an object with key named productname
  }
}

export default Scrape
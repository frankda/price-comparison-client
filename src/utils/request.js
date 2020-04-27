import axios from 'axios';

const Scrape = {
  getProduct(productname) {
    return axios.get(`http://localhost:3000/#/search/${productname}`);
  }
}

export default Scrape
import axios from 'axios';

const Scrape = {
  searchProduct(productname) {
    return axios.post(`http://localhost:3001/search`, { productname: productname });  // send an object with key named productname
  }
}

export default Scrape
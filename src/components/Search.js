import React, { useState } from 'react';
import Scrape from '../utils/request';

export default (props) => {
  const [productname, setProductname] = useState(''); // array destructuring

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.history.push(`/`); // react router navigation, redirection
    Scrape.searchProduct(productname).then(result => {
      console.log(result);
    })
  }

  return (
    <div className="search">
      <form onSubmit={ handleSubmit }>
        <label>
          Search:
          <input name="search" type="search" value={ productname } onChange={ (e) => setProductname(e.target.value) } />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
}
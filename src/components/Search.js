import React, { useState, Component } from 'react';
import Scrape from '../utils/request';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Gallery } from './Gallery';

export const Search = (props) => {
  // const [productname, setProductname] = useState(''); // array destructuring
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [isfetching, setIsfetching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsfetching(true);
    const productname = document.querySelector('#searching-product').value
    Scrape.searchProduct(productname).then(result => {
      console.log(result);
      setResults(result.data);
      setSearched(true);
      setIsfetching(false);
    });
  }

  return (
    <div className="search">
      <h2>Compare Product Now</h2>
      <form onSubmit={ handleSubmit }>
        <label>
          <input id="searching-product" name="search" placeholder="Search product" type="search" />
        </label>
        <button>Search</button>
      </form>
      {isfetching? <p>Loading...</p> : null}
      {results.length && !isfetching
        ? <Gallery products={results} />
        : null
      }
    </div>
  );
}
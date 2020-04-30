import React, { useState, Component } from 'react';
import Scrape from '../utils/request';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Gallery } from './Gallery';

export const Search = (props) => {
  const [productname, setProductname] = useState(''); // array destructuring
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.history.push(`/`); // react router navigation, redirection
    Scrape.searchProduct(productname).then(result => {
      console.log(result);
      setResults(result.data);
      setSearched(true);
    });
  }

  return (
    <div className="search">
      <h2>Compare Product Now</h2>
      <form onSubmit={ handleSubmit }>
        <label>
          <input name="search" placeholder="Search product" type="search" value={ productname } onChange={ (e) => setProductname(e.target.value) } />
        </label>
        <button>Search</button>
      </form>
      {results.length
        ? <Gallery products={results} />
        : null
      }
    </div>
  );
}
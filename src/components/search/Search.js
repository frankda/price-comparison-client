import React, { useState, Component } from 'react';
import Scrape from '../../utils/request';
import { Gallery } from '../Gallery';
import './search.scss';

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
      <form className="search__form" onSubmit={ handleSubmit }>
        <input className="search__input" name="search" placeholder="Search product" type="search" />
        <button className="btn">Search</button>
      </form>
      {isfetching? <p style={{marginTop: 30}}>Loading...</p> : null}
      {results.length && !isfetching
        ? typeof(results) === 'object' ? <Gallery products={results} /> : <p style={{marginTop: 30}}>No matching results</p>
        : null
      }
    </div>
  );
}
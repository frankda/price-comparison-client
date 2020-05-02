# Price before you go
## Intro
It is a full-stack project to compare price between different stores.

Live site: https://price-to-price.netlify.app/

## Stack
Frontend: React, use Ant UI for layout and design

Backend: Typescript, Expressjs, MongoDB as database, cheerio, superagent.

## Difficulties
Difficulties will be search function, user may not enter the correct item name, how to get the most relevant results.

If Coles website updated, this is not gonna work. So I need to run scraping everyday to update data make sure when user search anything this still works

## Deploy
Backend is deploied to Heroku

## To do
* Add no product image holder for products.
* Add debounce to prevent user click multiple times of  search button
* -Handle error if cannot get results of chemist warehouse-
* support Priceline and other online pharmacy
* add login signup
* add search history of users
* Collect search data
* issue when user search brand

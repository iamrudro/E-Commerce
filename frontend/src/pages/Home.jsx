import React from 'react'
import '../pageStyles/Home.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import Product from '../components/Product'

const products = [
  {
    "_id": "67fb9a0ebba9a69207d603da",
    "name": "Product1",
    "description": "Product description1",
    "price": 100,
    "ratings": 0,
    "image": [
      {
        "public_id": "This is test ID",
        "url": "This is test URL1",
        "_id": "67fb9a0ebba9a69207d603db"
      }
    ],
    "category": "Shirt",
    "stock": 1,
    "numberOfReviews": 1,
    "reviews": [],
    "createdAt": "2025-04-13T11:03:42.168Z",
    "__v": 0
  },
  {
    "_id": "67fcfebba2b20644779e962f",
    "name": "Product2",
    "description": "Product description2",
    "price": 200,
    "ratings": 0,
    "image": [
      {
        "public_id": "This is test ID2",
        "url": "This is test URL2",
        "_id": "67fcfebba2b20644779e9630"
      }
    ],
    "category": "Phone",
    "stock": 1,
    "numberOfReviews": 0,
    "reviews": [],
    "createdAt": "2025-04-14T12:25:31.496Z",
    "__v": 0
  },
  {
    "_id": "67fcff00a2b20644779e9632",
    "name": "Product3",
    "description": "Product description3",
    "price": 300,
    "ratings": 3.5,
    "image": [
      {
        "public_id": "This is test ID3",
        "url": "This is test URL3",
        "_id": "67fcff00a2b20644779e9633"
      }
    ],
    "category": "jeans",
    "stock": 4,
    "numberOfReviews": 2,
    "reviews": [
      {
        "user": "6807dcc1d6d45410198c2b63",
        "name": "Rudranil Das",
        "rating": 5,
        "comment": "Awesome",
        "_id": "6808c7151d2175457839f268"
      },
      {
        "user": "6808c1b839d679d312ba72ec",
        "name": "Lakshaman Das",
        "rating": 2,
        "comment": "So so but just fatafati",
        "_id": "6808c85a54d492323feb831a"
      }
    ],
    "createdAt": "2025-04-14T12:26:40.370Z",
    "__v": 3
  },{
    "_id": "67fb9a0ebba9a69207d603da",
    "name": "Product1",
    "description": "Product description1",
    "price": 100,
    "ratings": 0,
    "image": [
      {
        "public_id": "This is test ID",
        "url": "This is test URL1",
        "_id": "67fb9a0ebba9a69207d603db"
      }
    ],
    "category": "Shirt",
    "stock": 1,
    "numberOfReviews": 1,
    "reviews": [],
    "createdAt": "2025-04-13T11:03:42.168Z",
    "__v": 0
  },
  {
    "_id": "67fcfebba2b20644779e962f",
    "name": "Product2",
    "description": "Product description2",
    "price": 200,
    "ratings": 0,
    "image": [
      {
        "public_id": "This is test ID2",
        "url": "This is test URL2",
        "_id": "67fcfebba2b20644779e9630"
      }
    ],
    "category": "Phone",
    "stock": 1,
    "numberOfReviews": 0,
    "reviews": [],
    "createdAt": "2025-04-14T12:25:31.496Z",
    "__v": 0
  },
  {
    "_id": "67fcff00a2b20644779e9632",
    "name": "Product3",
    "description": "Product description3",
    "price": 300,
    "ratings": 3.5,
    "image": [
      {
        "public_id": "This is test ID3",
        "url": "This is test URL3",
        "_id": "67fcff00a2b20644779e9633"
      }
    ],
    "category": "jeans",
    "stock": 4,
    "numberOfReviews": 2,
    "reviews": [
      {
        "user": "6807dcc1d6d45410198c2b63",
        "name": "Rudranil Das",
        "rating": 5,
        "comment": "Awesome",
        "_id": "6808c7151d2175457839f268"
      },
      {
        "user": "6808c1b839d679d312ba72ec",
        "name": "Lakshaman Das",
        "rating": 2,
        "comment": "So so but just fatafati",
        "_id": "6808c85a54d492323feb831a"
      }
    ],
    "createdAt": "2025-04-14T12:26:40.370Z",
    "__v": 3
  }
]

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <div className="home-container">
        <h2 className="home-heading">Trending Now</h2>
        <div className="home-product-container">
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home

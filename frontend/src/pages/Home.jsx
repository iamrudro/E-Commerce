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
    "numberOfReviews": 0,
    "reviews": [],
    "createdAt": "2025-04-13T11:03:42.168Z",
    "__v": 0
  },
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
    "numberOfReviews": 0,
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
    "numberOfReviews": 0,
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
    "numberOfReviews": 0,
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

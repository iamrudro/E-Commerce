import React, { useState } from 'react';
import '../AdminStyles/UpdateProduct.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import { toast } from 'react-toastify';

function UpdateProduct() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [oldImage, setOldImage] = useState([]);
    const [imagePreview, setImagePreview] = useState([]);


    const categories = ["mobile", "fruits", "laptop", "shirt", "shoes", "pants", "glass", "watch", "cookies", "Pomegranate", "socks", "bag", "mouse", "headphone", "bucket", "bangle", "ring", "lcd", "jacket", "tops"];


    return (
        <>
            <PageTitle title="Update Product" />
            <Navbar />
            <div className="update-product-wrapper">
                <h1 className="update-product-title">Update Product</h1>
                <form className="update-product-form" encType='multipart/form-date'>

                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        className='update-product-input'
                        required
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="price">Product Price</label>
                    <input
                        type="number"
                        className='update-product-input'
                        required
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <label htmlFor="description">Product Description</label>
                    <textarea
                        type="text"
                        className='update-product-textarea'
                        required
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="category">Product Category</label>
                    <select
                        name="category"
                        id="category"
                        className='update-product-select'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Choose a Category</option>
                        {categories.map((item) => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>

                    <label htmlFor="stock">Product Stock</label>
                    <input
                        type="number"
                        className='update-product-input'
                        required
                        id="stock"
                        name="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />

                    <label htmlFor="image">Product Images</label>
                    <div className="update-product-file-wrapper">
                        <input type="file" name="image" accept="image/" multiple className='update-product-file-input' />
                    </div>
                    <div className="update-product-preview-wrapper">
                        {imagePreview.map((img, index) => (
                            <img src={img} alt="Product Preview" key={index} className="update-product-preview-image" />
                        ))}
                    </div>
                    <div className="update-product-old-images-wrapper">
                        {oldImage.map((img, index) => (
                            <img src={img.url} alt="Old Product preview" key={index} className='update-product-old-image' />
                        ))}
                    </div>

                    <button className="update-product-submit-btn">Update</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default UpdateProduct

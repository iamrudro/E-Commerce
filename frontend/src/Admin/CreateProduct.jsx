import React, { useState } from 'react';
import '../AdminStyles/CreateProduct.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Loader from '../components/Loader';

function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState([]);
    const [imagePreview, setImagePreview] = useState([]);

    const categories = ['shirt', 'dress', 'TV']
    const createProductSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set('name', name);
        myForm.set('price', price);
        myForm.set('description', description);
        myForm.set('category', category);
        myForm.set('stock', stock);
        image.forEach((img) => {
            myForm.append("image", img)
        })
    }

    const createProductImage = (e) => {
        const files = Array.from(e.target.files);

        setImage([]);
        setImagePreview([]);

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePreview((old) => [...old, reader.result]);
                    setImage((old) => [...old, reader.result]);
                }
            }
            reader.readAsDataURL(file)
        })
    }

    return (
        <>
            <PageTitle title='Create Product' />
            <Navbar />
            <div className="create-product-container">
                <h1 className="form-title">Create Product</h1>
                <form className="product-form" encType='multipart/form-data' onSubmit={createProductSubmit}>
                    <input
                        type="text"
                        className="form-input"
                        placeholder='Enter Product Name'
                        required
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="number"
                        className="form-input"
                        placeholder='Enter Product Price'
                        required
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <input
                        type="text"
                        className="form-input"
                        placeholder='Enter Product Description'
                        required
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <select
                        className="form-select"
                        required
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Choose a Category</option>
                        {categories.map((item) => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>

                    <input
                        type="number"
                        className="form-input"
                        placeholder='Enter Product Stock'
                        required
                        name="stock"
                        value={stock} onChange={(e) => setStock(e.target.value)}
                    />

                    <div className="file-input-container">
                        <input
                            type="file"
                            accept='image/'
                            className='form-input-file'
                            multiple
                            name="image"
                            onChange={createProductImage}
                        />
                    </div>

                    <div className="image-preview-container">
                        {imagePreview.map((img, index) => (
                            <img
                                src={img}
                                alt="Product Preview"
                                className='image-preview'
                                key={index}
                            />
                        ))}
                    </div>

                    <button className="submit-btn">Create</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default CreateProduct

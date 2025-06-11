import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Fetch All Products
export const fetchAdminProducts = createAsyncThunk('admin/fetchAdminProducts', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/api/v1/admin/products')
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Error while fetching the products' })
    }
})


// Create Products
export const createProduct = createAsyncThunk('admin/createProduct', async (productData, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.post('/api/v1/admin/products/create', productData, config)
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Product Creation Failed' })
    }
})


// Update Products
export const updateProduct = createAsyncThunk('admin/updateProduct', async ({ id, formData }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.put(`/api/v1/admin/product/${id}`, formData, config)
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Product Updation Failed' })
    }
})


// Delete Products
export const deleteProduct = createAsyncThunk('admin/deleteProduct', async (productId, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`/api/v1/admin/product/${productId}`)
        return { productId };
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Product Deletion Failed' })
    }
})


const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        products: [],
        success: false,
        loading: false,
        error: null,
        product: {},
        deleteLoading: false
    },
    reducers: {
        removeErrors: (state) => {
            state.error = null
        },
        removeSuccess: (state) => {
            state.success = false
        }
    },
    extraReducers: (builder) => {
        // Fetch all products CASE
        builder
            .addCase(fetchAdminProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAdminProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload.products
            })
            .addCase(fetchAdminProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.message || 'Error while fetching the products'
            })

        // Create Product CASE
        builder
            .addCase(createProduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.products.push(action.payload.product)
                console.log(state.products);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.message || 'Product Creation Failed'
            })


        // Update Product CASE
        builder
            .addCase(updateProduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.products = action.payload.product
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.message || 'Product Updation Failed'
            })


        // Delete Product CASE
        builder
            .addCase(deleteProduct.pending, (state) => {
                state.deleteLoading = true
                state.error = null
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.deleteLoading = false
                state.products = state.products.filter(product => product._id !== action.payload.productId)
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.deleteLoading = false
                state.error = action.payload?.message || 'Product Deletion Failed'
            })
    }
})

export const { removeErrors, removeSuccess } = adminSlice.actions;
export default adminSlice.reducer;
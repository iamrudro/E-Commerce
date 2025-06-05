import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Creating Order
export const createOrder = createAsyncThunk('order/createOrder', async (order, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/v1/new/order', order, config)
        console.log('Order Data', data);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Order creating failed.')
    }
})


// Get User Orders
export const getAllMyOrders = createAsyncThunk('order/getAllMyOrders', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/api/v1/orders/user')
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to Fetch Orders')
    }
})

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        success: false,
        loading: false,
        error: null,
        orders: [],
        order: {}
    },
    reducers: {
        removeErrors: (state) => {
            state.error = null
        },
        removeSuccess: (state) => {
            state.success = null
        }
    },
    extraReducers: (builder) => [
        // Create Order Case
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false
                state.order = action.payload.order
                state.success = action.payload.success
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.message || 'Order creating failed'
            }),

        // Get all user orders Case
        builder
            .addCase(getAllMyOrders.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getAllMyOrders.fulfilled, (state, action) => {
                state.loading = false
                state.orders = action.payload.orders
                state.success = action.payload.success
            })
            .addCase(getAllMyOrders.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.message || 'Failed to Fetch Orders'
            })
    ]
})

export const { removeErrors, removeSuccess } = orderSlice.actions;
export default orderSlice.reducer;
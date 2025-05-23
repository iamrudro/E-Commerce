import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Register API
export const register = createAsyncThunk('user/register', async (userData, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.post('/api/v1/register', userData, config)
        console.log('REGISTRATION DATA', data);
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Registration Failed. Please try again later')
    }
})

//Login API
export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/v1/login', { email, password }, config)
        console.log('LOGIN DATA', data);
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Login Failed. Please try again later')
    }
})

//Fetch Load User
export const loadUser = createAsyncThunk('user/loadUser', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/api/v1/profile');
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to load user profile. Please try again later')
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
        success: false,
        isAuthenticated: false
    },
    reducers: {
        removeErrors: (state) => {
            state.error = null
        },
        removeSuccess: (state) => {
            state.success = null
        }
    },
    extraReducers: (builder) => {
        //Registration Cases
        builder.addCase(register.pending, (state) => {
            state.loading = true,
                state.error = null
        })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.success = action.payload.success
                state.user = action.payload?.user || null
                state.isAuthenticated = Boolean(action.payload?.user)
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Registration Failed. Please try again later'
                state.user = null
                state.isAuthenticated = false
            })


        //Login Cases
        builder.addCase(login.pending, (state) => {
            state.loading = true,
                state.error = null
        })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.success = action.payload.success
                state.user = action.payload?.user || null
                state.isAuthenticated = Boolean(action.payload?.user)
                console.log(state.user);

            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Login Failed. Please try again later'
                state.user = null
                state.isAuthenticated = false
            })


        //Loading User Cases
        builder.addCase(loadUser.pending, (state) => {
            state.loading = true,
                state.error = null
        })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.user = action.payload?.user || null
                state.isAuthenticated = Boolean(action.payload?.user)
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Failed to load user profile. Please try again later'
                state.user = null
                state.isAuthenticated = false
            })
    }
})


export const { removeErrors, removeSuccess } = userSlice.actions;
export default userSlice.reducer;

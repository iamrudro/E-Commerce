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

//Logout API
export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/api/v1/logout', { withCredentials: true });
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to Logout. Please try again later')
    }
})

//Update Profile
export const updateProfle = createAsyncThunk('user/updateProfle', async (userData, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.put('/api/v1/profile/update', userData, config);
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Profle Update failed. Please try again Later' })
    }
})


//Update Password
export const updatePassword = createAsyncThunk('user/updatePassword', async (formData, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.put('/api/v1/password/update', formData, config);
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Password updation Failed. Please try again later')
    }
})


//Forgot Password
export const forgotPassword = createAsyncThunk('user/forgotPassword', async (email, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/v1/password/forgot', email, config);
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Failed to send Email' })
    }
})


//Reset Password
export const resetPassword = createAsyncThunk('user/resetPassword', async ({ token, userData }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(`/api/v1/reset/${token}`, userData, config);
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Failed to reset password' })
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        loading: false,
        error: null,
        success: false,
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
        message: null
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
        builder
            .addCase(register.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.success = action.payload.success
                state.user = action.payload?.user || null
                state.isAuthenticated = Boolean(action.payload?.user)

                // Store in LocalStorage
                localStorage.setItem('user', JSON.stringify(state.user));
                localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Registration Failed. Please try again later'
                state.user = null
                state.isAuthenticated = false
            })


        //Login Cases
        builder
            .addCase(login.pending, (state) => {
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

                // Store in LocalStorage
                localStorage.setItem('user', JSON.stringify(state.user));
                localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));

            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Login Failed. Please try again later'
                state.user = null
                state.isAuthenticated = false
            })


        //Loading User Cases
        builder
            .addCase(loadUser.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.user = action.payload?.user || null
                state.isAuthenticated = Boolean(action.payload?.user)

                // Store in LocalStorage
                localStorage.setItem('user', JSON.stringify(state.user));
                localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Failed to load user profile. Please try again later'
                state.user = null
                state.isAuthenticated = false

                if (action.payload?.statusCode === 401) {
                    state.user = null;
                    state.isAuthenticated = false;
                    localStorage.removeItem('user')
                    localStorage.removeItem('isAuthenticated')
                }
            })


        //Logout Cases
        builder
            .addCase(logout.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.user = action.payload?.user || null
                state.isAuthenticated = false

                localStorage.removeItem('user')
                localStorage.removeItem('isAuthenticated')
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Logout Failed. Please try again later'
            })


        //Update User Profile Cases
        builder
            .addCase(updateProfle.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(updateProfle.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.user = action.payload?.user || null
                state.success = action.payload.success
                state.message = action.payload.message
            })
            .addCase(updateProfle.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Profle Update failed. Please try again Later'
            })



        //Update user Password Cases
        builder
            .addCase(updatePassword.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.success = action.payload?.success
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Password updation Failed. Please try again later'
            })


        //Forgot Password Cases
        builder
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.success = action.payload?.success
                state.message = action.payload?.message
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Failed to send Email'
            })


        //Reset Password Cases
        builder
            .addCase(resetPassword.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
                state.success = action.payload?.success
                state.user = null,
                    state.isAuthenticated = false
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload?.message || 'Failed to reset password'
            })
    }
})


export const { removeErrors, removeSuccess } = userSlice.actions;
export default userSlice.reducer;

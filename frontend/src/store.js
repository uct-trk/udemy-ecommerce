import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice.js'
import cartSliceReducer from './slices/cartSlice.js'
import authSliceReducer from './slices/authSlice.js'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    cart:cartSliceReducer,
    auth:authSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true
})
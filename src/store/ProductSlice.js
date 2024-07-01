import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        available: true,
      });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    toggleAvailable: (state, action) => {
      const toggledProduct = state.products.find(product => product.id === action.payload);
      if (toggledProduct) {
        toggledProduct.available = !toggledProduct.available;
      }
    },
  },
});

export const { addProduct, removeProduct, toggleAvailable } = ProductSlice.actions;
export default ProductSlice.reducer;

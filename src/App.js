import './App.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addProduct } from './store/ProductSlice';
import InputField from './components/InputField'
import ProductList from './components/ProductList';
function App() {
  const dispatch = useDispatch();
  const addProductHandler = (product) => {
    dispatch(addProduct(product))
  }

  return (
    <div className="App">
     <InputField handleSubmit={addProductHandler}/> 
     <ProductList/>
    </div>
  );
}

export default App;

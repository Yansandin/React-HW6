import {useState} from 'react';

const InputField = ({ handleSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
  
    const onSubmit = (e) => {
      e.preventDefault();
      handleSubmit({ name, description, price });
      setName('');
      setDescription('');
      setPrice('');
    };
  
    return (
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
        />
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" 
        />
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          placeholder="Price" 
        />
        <button type="submit">Add Product</button>
      </form>
    );
  }
  
  export default InputField;
  
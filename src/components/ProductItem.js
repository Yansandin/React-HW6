import { useDispatch } from 'react-redux';
import { removeProduct, toggleAvailable } from '../store/ProductSlice';

function ProductItem({ id, name, description, price, available }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input 
        type="checkbox" 
        checked={available} 
        onChange={() => dispatch(toggleAvailable(id))} 
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{price}</span><br></br>
      
      <button onClick={() => dispatch(removeProduct(id))}>&times;</button>
    </li>
  );
}

export default ProductItem;

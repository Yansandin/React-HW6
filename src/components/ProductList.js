import {useSelector} from 'react-redux';
import ProductItem from './ProductItem';


function ProductList() {
    const products = useSelector(state => state.products.products);
    return (
        <ul>
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    {...product}
                />
            ))}
        </ul>
    );
}

export default ProductList;
import React from 'react';
import plusIcon from './images/icon-plus.svg';
import minusIcon from './images/icon-minus.svg';
import cartIcon from './images/icon-cart.svg';
import { useEffect} from 'react';

const ProductInfoComponent = ({price, productAmount, handleAmountDecrease, handleAmountIncrease, currentProduct, setCurrentProduct, updateCartItems,cartItems  }) => {

  const handleAddToCart = () => {
    setCurrentProduct(prevProduct => {
      const updatedProduct = {
        ...prevProduct,
        amount: productAmount,
        price:  productAmount * price
      };
  
      if (cartItems.length === 0) {
        updateCartItems([updatedProduct]);
        return updatedProduct;
      }
  
      const index = cartItems.findIndex(item => item.id === updatedProduct.id);
      if (index !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index] = updatedProduct;
        updateCartItems(updatedCartItems);
      } else {
        updateCartItems(prevCartItems => [...prevCartItems, updatedProduct]);
      }
  
      return updatedProduct;
    });
  };


  return (
    <div className='product-info-container'>
      <div className='product-info'>
        <p className='product-company'>Sneaker Company</p>
        <h1>{currentProduct.name}</h1>
        <p>{currentProduct.description}
        </p>
      </div>
      <div className='product-price'>
        <h2 className='new-price'>${price}.00</h2>
        <div className='sale-box'>
          <p>50%</p>
        </div>
        <p className='original-price'>$250.00</p>
      </div>
      <div className='transaction-info'>
        <div className='quantity-box'>
          <img className='minus-icon hover' src={minusIcon} alt='minus icon' onClick={handleAmountDecrease}></img>
          <p>{productAmount}</p>
          <img className='plus-icon hover' src={plusIcon} alt='plus icon' onClick={handleAmountIncrease}></img>
        </div>
        <div className='cart-container hover' onClick={handleAddToCart}>
          <img className='cart-icon-transaction' src={cartIcon} alt='cart icon'></img>
          <p> Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoComponent;
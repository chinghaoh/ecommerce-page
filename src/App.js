import React from 'react';
import { useState, useEffect, useId } from 'react';
import ProductModalComponent from './ProductModalComponent';
import './App.css'; // You can create this file for additional styling
import './Style.css';
import avatarIcon from './images/image-avatar.png';
import shoppingCartIcon from './images/icon-cart.svg';
import product1Thumbnail from './images/image-product-1-thumbnail.jpg';
import product1 from './images/image-product-1.jpg';
import product2Thumbnail from './images/image-product-2-thumbnail.jpg';
import product2 from './images/image-product-2.jpg';
import product3Thumbnail from './images/image-product-3-thumbnail.jpg';
import product3 from './images/image-product-3.jpg';
import product4Thumbnail from './images/image-product-4-thumbnail.jpg';
import product4 from './images/image-product-4.jpg';
import nextIcon from './images/icon-next.svg';
import previousIcon from './images/icon-previous.svg';
import menuIcon from './images/icon-menu.svg';
import deleteIcon from './images/icon-delete.svg';
import ProductInfoComponent from './ProductInfoComponent';
import Thumbnail from './ThumbnailComponent';
import ImageContainer from './ImageContainer';


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [selectedImage, setSelectedImage] = useState(product1);
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productAmount, setProductAmount] = useState(1)
  const [cartItems, setCartItems] = useState([]);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);



  /*Handle mobile or desktop check */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  /*Handle setting images by clicking on the image itself*/
  const handleImageChange = (newImage) => {
    setSelectedImage(newImage);
  };

  const productThumbnails = [
    product1Thumbnail,
    product2Thumbnail,
    product3Thumbnail,
    product4Thumbnail,
  ];

  const productImageList = [
    product1,
    product2,
    product3,
    product4,
  ];

  /*Handle changing image by using the next and previous icon*/
  const handleImageChangeIndex = (index) => {
    setImageIndex(index);
    setSelectedImage(productImageList[index]);
  };

  const handleNextImage = () => {
    const nextIndex = (imageIndex + 1) % productImageList.length;
    handleImageChangeIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const previousIndex = (imageIndex - 1 + productImageList.length) % productImageList.length;
    handleImageChangeIndex(previousIndex);
  };


  /*Handles showing and closing the modal */
  const handleImageClick = () => {
    setShowModal(!showModal);
  };

  /*Creates id for the product*/
  const productId = useId();


  /*Sets the current product of the page 
  */
  const handleProductSelection = (productName, price, description, productThumbnails, productImageList) => {
    const productObject = {
      id: productId,
      name: productName,
      price: price,
      amount: productAmount,
      description: description,
      productThumbnails: productThumbnails,
      productImageList: productImageList
    };
    setCurrentProduct(productObject);
  };

  /* Handles the cart*/


  useEffect(() => {
    handleProductSelection("Fall Limited Edition Sneakers", 125,
      // eslint-disable-next-line no-multi-str
      "These low-profile sneakers are your perfect casual wear companion. Featuring a \
    durable rubber outer sole, they'll withstand everything the weather can offer.", [
      product1Thumbnail,
      product2Thumbnail,
      product3Thumbnail,
      product4Thumbnail,
    ], [
      product1,
      product2,
      product3,
      product4,
    ]
    );
  }, []);


  const handleAmountIncrease = () => {
    setProductAmount(prevAmount => prevAmount + 1);
  }

  const handleAmountDecrease = () => {
    setProductAmount(prevAmount => prevAmount > 0 ? prevAmount - 1 : prevAmount);
  }

  /* Handles updating the cart*/
  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };

  const deleteCartItem = (itemId, event) => {
    event.stopPropagation(); // Prevent the event from bubbling up and triggering other elements' click events
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  /*Handle toggle of shoppingcart */
  const toggleCartDropdown = (event) => {
    event.preventDefault(); // Prevent the default action of the touch event
    setCartDropdownVisible(!cartDropdownVisible);
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      {isMobile ? (
        /*TODO fix header for mobile view */
        <div className='mobile-header'>
          <div className='left-side-header'>
            <img className='mobile-menu-icon' src={menuIcon} alt='menu-icon'></img>
            <p>Sneakers</p>
          </div>
          <div className='right-side-header'>
            <img className='shopping-cart-icon' src={shoppingCartIcon} alt='shoppingCart' onTouchStart={toggleCartDropdown}
            ></img>
            <img className='avatar-icon' src={avatarIcon} alt='Profile icon'></img>
          </div>
          {cartDropdownVisible && (
            <div className="dropdown-content-mobile" style={{ display: cartDropdownVisible ? 'block' : 'none' }}>
              <h2>Cart</h2>
              {cartItems.length ?
                <div>
                  <ul className='shopping-cart-checkout'>
                    {cartItems.map(item => (
                      <li className='product-shopping-cart-info' key={item.id}>
                        <img className='shopping-cart-checkout-thumbnail' src={item.productThumbnails[0]} alt='product thumbnail'></img>
                        <p>{item.name} $125.00 x {item.amount} <strong>${125 * item.amount}</strong></p>
                        <img src={deleteIcon} alt='delete icon' onClick={(e) => deleteCartItem(item.id, e)} />
                      </li>
                    ))}
                  </ul>
                  <button className='cart-container checkout-button hover'>Checkout</button>
                </div>
                : <p>Your cart is empty</p>}
            </div>
          )}
        </div>
      ) : (<header>
        <div className='left-side-header'>
          <p>Sneakers</p>
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className='right-side-header'>
          <div className='cart-avatar-container'>
            <div className='cart-container-header'>
              <img className='shopping-cart-icon' src={shoppingCartIcon} alt='shoppingCart' onClick={toggleCartDropdown}></img>
              <img className='avatar-icon' src={avatarIcon} alt='Profile icon'></img>
            </div>
            {cartDropdownVisible && (
              <div className="dropdown-content">
                <h2>Cart</h2>
                {cartItems.length ?
                  <div>
                    <ul className='shopping-cart-checkout'>
                      {cartItems.map(item => (
                        <li className='product-shopping-cart-info' key={item.id}>
                          <img className='shopping-cart-checkout-thumbnail' src={item.productThumbnails[0]} alt='product thumbnail'></img>
                          <p>{item.name} $125.00 x {item.amount} <strong>${125 * item.amount}</strong></p>
                          <img src={deleteIcon} alt='delete icon' onClick={(e) => deleteCartItem(item.id, e)} />
                        </li>
                      ))}
                    </ul>
                    <button className='cart-container checkout-button hover'>Checkout</button>
                  </div>
                  : <p>Your cart is empty</p>}
              </div>
            )}
          </div>
        </div>
      </header>
      )}
      <body>
        <div className="container">
          <div className="grid-wrapper">
            {isMobile ? (
              <ImageContainer selectedImage={selectedImage} handlePreviousImage={handlePreviousImage} handleNextImage={handleNextImage}></ImageContainer>
            ) : (
              <div className='image-container'>
                <img className='span-row-2 hover' src={selectedImage} alt='product-1' onClick={handleImageClick}></img>
                <Thumbnail src={product1Thumbnail} alt='product-1' onClick={() => handleImageChange(product1)}></Thumbnail>
                <Thumbnail src={product2Thumbnail} alt='product-2' onClick={() => handleImageChange(product2)}></Thumbnail>
                <Thumbnail src={product3Thumbnail} alt='product-3' onClick={() => handleImageChange(product3)}></Thumbnail>
                <Thumbnail src={product4Thumbnail} alt='product-4' onClick={() => handleImageChange(product4)}></Thumbnail>
              </div>
            )}
            <ProductInfoComponent price={125} productAmount={productAmount} handleAmountDecrease={handleAmountDecrease}
              handleAmountIncrease={handleAmountIncrease} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}
              updateCartItems={updateCartItems} cartItems={cartItems}></ProductInfoComponent>
          </div>
        </div>
        {showModal && <ProductModalComponent onClose={() => setShowModal(false)} selectedImage={selectedImage}
          productImageList={productImageList} productThumbnail={productThumbnails}
          previousIcon={previousIcon} nextIcon={nextIcon}
        ></ProductModalComponent>}
      </body>
    </html>
  );
}
export default App;
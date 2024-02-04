import React from 'react';
import { useState, useEffect } from 'react';
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


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [selectedImage, setSelectedImage] = useState(product1);
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [shoppingCar, setShoppingCart] = useState([])

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

  const productList = [
    product1,
    product2,
    product3,
    product4,
  ];

  /*Handle changing image by using the next and previous icon*/
  const handleImageChangeIndex = (index) => {
    setImageIndex(index);
    setSelectedImage(productList[index]);
  };

  const handleNextImage = () => {
    const nextIndex = (imageIndex + 1) % productList.length;
    handleImageChangeIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const previousIndex = (imageIndex - 1 + productList.length) % productList.length;
    handleImageChangeIndex(previousIndex);
  };


  /*Handles showing and closing the modal */
  const handleImageClick = () => {
    setShowModal(!showModal);
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </head>
      {isMobile ? (
        /*TODO fix header for mobile view */
        <header>
          <p>test</p>
        </header>
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
          <img className='shopping-cart-icon' src={shoppingCartIcon} alt='shoppingCart'></img>
          <img className='avatar-icon' src={avatarIcon} alt='Profile icon'></img>
        </div>
      </header>
      )}
      <body>
        <div className="container">
          <div className="grid-wrapper">
            {isMobile ? (
              <div className="image-container-mobile" style={{ backgroundImage: `url(${selectedImage})` }}>
                <div className='icon-circle'>
                  <img className="icon" src={previousIcon} alt='previous icon' onClick={handlePreviousImage}></img>
                </div>
                <div className='icon-circle'>
                  <img className="icon" src={nextIcon} alt='next icon' onClick={handleNextImage}></img>
                </div>
              </div>
            ) : (
              <div className='image-container'>
                <img className='span-row-2' src={selectedImage} alt='product-1' onClick={handleImageClick}></img>
                <img src={product1Thumbnail} alt='product-1' onClick={() => handleImageChange(product1)}></img>
                <img src={product2Thumbnail} alt='product-2' onClick={() => handleImageChange(product2)}></img>
                <img src={product3Thumbnail} alt='product-3' onClick={() => handleImageChange(product3)}></img>
                <img src={product4Thumbnail} alt='product-4' onClick={() => handleImageChange(product4)}></img>
              </div>

            )}
            <div className='product-info-container'>
            {/*TODO fix product info
            add functionality to add to shopping items to child component
            1.create shopping cart modal that will only render if shopping cart is clicked
            2.The add button will populate the child component with data
            3. the child component will render the data, if there is nothing show cart is empty
             */ }
              <div className='product-info'>
                <p>Sneaker Company</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
                  durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
              </div>
              <div className='product-price'>
                <p>$125.00</p>
                <p>50%</p>
                <p>$250.00</p>
              </div>
              <div className='transaction-info'>
                <p>0</p>
                <p> Add to cart</p>
              </div>
            </div>
          </div>
        </div>
        {showModal && <ProductModalComponent onClose={() => setShowModal(false)} selectedImage={selectedImage}
          productList={productList} productThumbnail={productThumbnails}
          previousIcon={previousIcon} nextIcon={nextIcon}
        ></ProductModalComponent>}

        {/*TODO
        Add shopping cart component and 
         */}
      </body>
    </html>
  );
}
export default App;
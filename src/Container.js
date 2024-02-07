// import React from 'react';
// import ImageContainer from './ImageContainer';
// import Thumbnail from './Thumbnail';
// import ProductInfo from './ProductInfo';
// import product1Thumbnail from './images/image-product-1-thumbnail.jpg';
// import product1 from './images/image-product-1.jpg';
// import product2Thumbnail from './images/image-product-2-thumbnail.jpg';
// import product2 from './images/image-product-2.jpg';
// import product3Thumbnail from './images/image-product-3-thumbnail.jpg';
// import product3 from './images/image-product-3.jpg';
// import product4Thumbnail from './images/image-product-4-thumbnail.jpg';
// import product4 from './images/image-product-4.jpg';

// const Container = ({ isMobile, selectedImage, handlePreviousImage, handleNextImage, productAmount, handleAmountDecrease, handleAmountIncrease, handleAddToCart }) => {

//     return (
//         <div className="container">
//             <div className="grid-wrapper">
//                 {isMobile ? (
//                     <ImageContainer selectedImage={selectedImage} handlePreviousImage={handlePreviousImage} handleNextImage={handleNextImage} />
//                 ) : (
//                     <div className='image-container'>
//                         <img className='span-row-2' src={selectedImage} alt='product-1' onClick={handleImageClick}></img>
//                         <Thumbnail src={product1Thumbnail} alt='product-1' onClick={() => handleImageChange(product1)} />
//                         <Thumbnail src={product2Thumbnail} alt='product-2' onClick={() => handleImageChange(product2)} />
//                         <Thumbnail src={product3Thumbnail} alt='product-3' onClick={() => handleImageChange(product3)} />
//                         <Thumbnail src={product4Thumbnail} alt='product-4' onClick={() => handleImageChange(product4)} />
//                     </div>
//                 )}
//                 <ProductInfo
//                     productAmount={productAmount}
//                     handleAmountDecrease={handleAmountDecrease}
//                     handleAmountIncrease={handleAmountIncrease}
//                     handleAddToCart={handleAddToCart}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Container;
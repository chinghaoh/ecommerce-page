import { useState } from "react";
import closeIcon from './images/icon-close.svg'

function ProductModalComponent({ onClose, selectedImage, productImageList, productThumbnail,
    previousIcon, nextIcon, }) {

    const [selectedModalImage, setSelectedModalImage] = useState(selectedImage);
    const [imageIndex, setImageIndex] = useState(0);

    /* TODO add close icon
       Handle closing function
    */

    /*Handles setting of modal image*/
    const handleModalImageChange = (newImage) => {
        setSelectedModalImage(newImage);
        const index = productImageList.findIndex(product => product === newImage);
        setImageIndex(index);
    };


    /*Handle changing image by using the next and previous icon*/
    const handleModalImageChangeIndex = (index) => {
        setImageIndex(index);
        setSelectedModalImage(productImageList[index]);
    };

    const handleNextModalImage = () => {
        const nextIndex = (imageIndex + 1) % productImageList.length;
        handleModalImageChangeIndex(nextIndex);
    };

    const handlePreviousModalImage = () => {
        const previousIndex = (imageIndex - 1 + productImageList.length) % productImageList.length;
        handleModalImageChangeIndex(previousIndex);
    };

    /*Handles closing of the modal */
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-close-button')) {
            onClose();

        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <div className='image-container modal-grid'>
                    <div className="modal-close-button-container">
                        <img className="modal-close-button" src={closeIcon} alt="close icon" onClick={onClose}></img>
                    </div>
                    <div className="modal-background span-row-2" style={{ backgroundImage: `url(${selectedModalImage})` }}>
                        <div className='icon-circle'>
                            <img className="icon" src={previousIcon} alt='previous icon' onClick={handlePreviousModalImage}></img>
                        </div>
                        <div className='icon-circle'>
                            <img className="icon" src={nextIcon} alt='next icon' onClick={handleNextModalImage}></img>
                        </div>
                    </div>
                    <img className="modal-thumbnail hover" src={productThumbnail[0]} alt='product-1' onClick={() => handleModalImageChange(productImageList[0])}></img>
                    <img className="modal-thumbnail hover" src={productThumbnail[1]} alt='product-2' onClick={() => handleModalImageChange(productImageList[1])}></img>
                    <img className="modal-thumbnail hover" src={productThumbnail[2]} alt='product-3' onClick={() => handleModalImageChange(productImageList[2])}></img>
                    <img className="modal-thumbnail hover" src={productThumbnail[3]} alt='product-4' onClick={() => handleModalImageChange(productImageList[3])}></img>
                </div>
            </div>
        </div>)
}

export default ProductModalComponent
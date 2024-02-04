import { useState } from "react";

function ProductModalComponent({ onClose, selectedImage, productList, productThumbnail,
    previousIcon, nextIcon, }) {

    const [selectedModalImage, setSelectedModalImage] = useState(selectedImage);
    const [imageIndex, setImageIndex] = useState(0);

   /* TODO add close icon
      Handle closing function
   */



    /*Handles setting of modal image*/
    const handleModalImageChange = (newImage) => {
        setSelectedModalImage(newImage);
        const index =productList.findIndex(product => product === newImage);
        setImageIndex(index);
    };


    /*Handle changing image by using the next and previous icon*/
    const handleModalImageChangeIndex = (index) => {
        setImageIndex(index);
        setSelectedModalImage(productList[index]);
    };

    const handleNextModalImage = () => {
        const nextIndex = (imageIndex + 1) % productList.length;
        handleModalImageChangeIndex(nextIndex);
    };

    const handlePreviousModalImage = () => {
        const previousIndex = (imageIndex - 1 + productList.length) % productList.length;
        handleModalImageChangeIndex(previousIndex);
    };

    /*Handles closing of the modal */
    const handleOverlayClick = (e) => {
        // Close the modal only if the click is on the overlay (outside the modal content)
        if (e.target.classList.contains('modal-overlay')) {
            //onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <div className='image-container modal-grid'>
                    <div className="modal-background span-row-2" style={{ backgroundImage: `url(${selectedModalImage})` }}>
                        <div className='icon-circle'>
                            <img className="icon" src={previousIcon} alt='previous icon' onClick={handlePreviousModalImage}></img>
                        </div>
                        <div className='icon-circle'>
                            <img className="icon" src={nextIcon} alt='next icon' onClick={handleNextModalImage}></img>
                        </div>
                    </div>
                    <img className="modal-thumbnail" src={productThumbnail[0]} alt='product-1' onClick={() => handleModalImageChange(productList[0])}></img>
                    <img className="modal-thumbnail" src={productThumbnail[1]} alt='product-2' onClick={() => handleModalImageChange(productList[1])}></img>
                    <img className="modal-thumbnail" src={productThumbnail[2]} alt='product-3' onClick={() => handleModalImageChange(productList[2])}></img>
                    <img className="modal-thumbnail" src={productThumbnail[3]} alt='product-4' onClick={() => handleModalImageChange(productList[3])}></img>
                </div>
            </div>
        </div>)
}

export default ProductModalComponent
import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div className='card'>
            <a target="_blank" href={image.webformatURL}>
                <img className='card-img' src={image.webformatURL} alt={image.tags} />
            </a>

        </div>
    );
}

export default ImageCard;

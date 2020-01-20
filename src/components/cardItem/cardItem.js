import React from 'react';

import './cardItem.css';

export default function CardItem(data) {
    const { name, delivery_price, image, online } = data.item;
    return (
        <article className='item'>
            <div className='contact-button'></div>
            <div className='img-container'>
                <img src={image} alt='food_image' />
                <div className='price'>
                    <p>delivery: €{delivery_price}</p>
                </div>
                <div>
                    <p className='item-infor'>{name}</p>
                    <div className={online ? 'online' : 'clock icon'}></div>
                </div>
            </div>

        </article>
    )
}

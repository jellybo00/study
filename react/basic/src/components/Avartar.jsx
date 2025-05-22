import React from 'react';

export default function Avartar({ image, isNew }) {
    return (
        <div className='avartar'>
            <img
                className='photo'
                src={image}
                alt="아바타"
            />
            {/* isNew  가 ture면 ~ new 노출 => &&연산자 */}
            {isNew && <span className='new_tag'>New</span>}
        </div>
    );
}


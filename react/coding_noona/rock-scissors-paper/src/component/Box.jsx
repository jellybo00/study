import React from 'react'

const Box = ({title, img, desc}) => {
  return (
    <div className='box'>
        <strong>{title}</strong>
        <img src={img} alt="" />
        <p>{desc}</p>
    </div>
  )
}

export default Box

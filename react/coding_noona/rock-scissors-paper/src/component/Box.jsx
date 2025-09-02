import React from 'react'

const Box = (props) => {
    console.log('props', props)
  return (
    <div className='box'>
        <strong>{props.title}</strong>
        <img src={props.item && props.item.img} alt="" />
        <p>{props.result}</p>
    </div>
  )
}

export default Box

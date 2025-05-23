import React from 'react'

const Box = (props) => {
    // console.log(props)
  return (
     <div className='box'>
        box {props.num}
        <p>{props.name}</p>
    </div>
  )
}

export default Box

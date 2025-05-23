import React from 'react'

const GameBtn = ({name,BtnImg}) => {
  return (
    <button className='GameBtn'>
        <img src={BtnImg} alt={name} />
    </button>
  )
}

export default GameBtn

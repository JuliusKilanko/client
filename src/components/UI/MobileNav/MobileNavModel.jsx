import React from 'react'
import './MobileNavModel.scss'

function MobileNavModel(props) {
  return (
    <div>
      <div className='mobileModel' onClick={props.onClose}/>
      <div className='modelView'>
        {props.children}
      </div>
    </div>
  )
}

export default MobileNavModel

import React from 'react'
import './Models.scss'

function Model(props) {
  return (
    <div>
    <div className='backdrop' onClick={props.onClose}/>
    <div className='model'>
        {props.children}
    </div>
    </div>
  )
}

export default Model

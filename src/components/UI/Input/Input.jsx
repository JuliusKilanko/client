import React from 'react'
import './Input.scss'

const Input = React.forwardRef((props, ref) =>{
    return <input 
            ref={ref}
            onChange={props.onChange}
            value={props.value}
            {...props.input}
            className='reuseableInput'
    />
})

export default Input
import React from 'react'
import Model from '../../UI/Models/Model'
import './Form.scss'
import {IoIosCloseCircleOutline} from 'react-icons/io'

function Forms(props) {
  return (
    <Model onClose={props.onClose}>
      <form className='bookingForm'>
      <div className='close'><IoIosCloseCircleOutline onClick={props.onClose}/></div>
      <h1>Book an Apartment</h1>
        <div>
        <label>Rooms</label>
        <input type='number' placeholder='Number Of Rooms'/>
        </div>
        <div>
          <label>Date of Arrival</label>
          <input type='date'/>
        </div>
        <div>
        <label>People</label>
        <input type='number' placeholder='Number of People'/>
        </div>
        <div>
          <label>Exiting Date</label>
          <input type='date'/>
        </div>
        <button className='bookButton'>Book An Apartment</button>
    </form>
    </Model>
  )
}

export default Forms

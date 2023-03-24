import React from 'react'
import AvaliableRoom from './AvailableRooms'

function Rooms(props) {
  return (
    <>
      <AvaliableRoom onBook={props.onBook}/>
    </>
  )
}

export default Rooms

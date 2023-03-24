import React from 'react'
import Terres from '../../assets/terres.webp'
import CulImg from '../../assets/cul-de-sac.webp'
import Weston from '../../assets/weston.webp'
import Dominican from '../../assets/el-limon.webp'
import Gibbles from '../../assets/gibble.webp'
import LaRomana from '../../assets/la-romana.webp'
import CapEstate from '../../assets/cap-estate.webp';
import Thailand from '../../assets/thailand.webp';
import Card from '../UI/Card/Card'
import RoomItem from './RoomItem'
import './availableRooms.scss'

const dummy_Rooms =[
        {
            id : 'm1',
            name : 'Terres Basses, St. Martin',
            address : '7,308 kilometers away',
            availablity : 'May 5 - 12',
            price : 1258,
            img : Terres
          },
          {
            id : 'm2',
            name : 'Cul-de-Sac, St.Martin',
            address : '7,297 kilometers away',
            availablity : 'May 5 - 12',
            price : 1000,
            img : CulImg
          },
          {
            id : 'm3',
            name : 'Weston, Barbados',
            address : '6,931 kilometers away',
            availablity : 'May 5 - 12',
            price : 1500,
            img : Weston
          },
          {
            id : 'm4',
            name : 'El Limon, Dominican Republic',
            address : '7,971 kilometers away',
            availablity : 'May 5 - 12',
            price : 3850,
            img : Dominican
          },
          {
            id : 'm5',
            name : 'Gibbles, Barbados',
            address : '6,932 kilometers away',
            availablity : 'May 5 - 12',
            price : 775,
            img : Gibbles
          },
          {
            id : 'm6',
            name : 'La Romana, Dominican Republic',
            address : '7,923 kilometers away',
            availablity : 'May 5 - 12',
            price : 15000,
            img : LaRomana
          },
          {
            id : 'm7',
            name : 'Cap Estate, St. Lucia',
            address : '7,070 kilometers away',
            availablity : 'May 5 - 12',
            price : 1333,
            img : CapEstate
          },
          {
            id : 'm8',
            name : 'Koh Samui, Thailand',
            address : '10,6111 kilometers away',
            availablity : 'May 5 - 12',
            price : 1650,
            img : Thailand
          },
          {
            id : 'm5',
            name : 'Gibbles, Barbados',
            address : '6,932 kilometers away',
            availablity : 'May 5 - 12',
            price : 775,
            img : Gibbles
          },
          {
            id : 'm6',
            name : 'La Romana, Dominican Republic',
            address : '7,923 kilometers away',
            availablity : 'May 5 - 12',
            price : 15000,
            img : LaRomana
          },
          {
            id : 'm7',
            name : 'Cap Estate, St. Lucia',
            address : '7,070 kilometers away',
            availablity : 'May 5 - 12',
            price : 1333,
            img : CapEstate
          },
          {
            id : 'm8',
            name : 'Koh Samui, Thailand',
            address : '10,6111 kilometers away',
            availablity : 'May 5 - 12',
            price : 1650,
            img : Thailand
          },
]

function AvaliableRoom(props) {
    const roomsListHelper = dummy_Rooms.map((rooms) =>(
        <RoomItem 
        key={rooms.id} 
        id = {rooms.id}
        name ={rooms.name} 
        address ={rooms.address} 
        img ={rooms.img} 
        price={rooms.price} onBook={props.onBook}/>
    ) )
  return  <section>
    <Card>
    <ul className='availableRooms'>{roomsListHelper}</ul>
    </Card>
  </section>
}

export default AvaliableRoom
import React from 'react'
import './brand.scss'
import House from '../../../assets/houseboat.jpg'
import Carousel from 'nuka-carousel';
import BrandList from './BrandList'
// import {IoMdSwitch} from 'react-icons/io'
import Dummusi from '../../../assets/dammusi.jpg'
import Caves from '../../../assets/cass.jpg'
import Trending from '../../../assets/trending.jpg'
import Amazing from '../../../assets/amazingpool.jpg'
import BeachFront from '../../../assets/beach.jpg'
import OMG from '../../../assets/omg.jpg'
import Private from '../../../assets/pivateRoom.jpg'
import EarthHouse from '../../../assets/earthhomes.jpg'
import Lake from '../../../assets/lake.jpg'
import Arctic from '../../../assets/arct.jpg'
import Play from '../../../assets/play.jpg'
import Countryside from '../../../assets/countryside.jpg'
import Trulli from '../../../assets/trulli.jpg'

const BrandItems =[
    {
        text : 'Houseboats',
        icon : House
    },
    {
        text : 'Dummusi',
        icon : Dummusi
    },
    {
        text : 'Caves',
        icon : Caves
    },
    {
        text : 'Trending',
        icon : Trending
    },
    {
        text : 'Amazing Pool',
        icon : Amazing
    },
    {
        text : 'Beachfront',
        icon : BeachFront
    },
    {
        text : 'OMG',
        icon : OMG
    },
    {
        text : 'Private Room',
        icon : Private
    },
    {
        text : 'Earth Room',
        icon : EarthHouse
    },
    {
        text : 'Lake',
        icon : Lake
    },
    {
        text : 'Arctic',
        icon : Arctic
    },
    {
        text : 'Play',
        icon : Play
    },
    {
        text : 'Countryside',
        icon : Countryside
    },
    {
        text : 'Trulli',
        icon : Trulli
    },
]

function MobileBrand() {
    const brandList = BrandItems.map(brand => 
        <BrandList 
        text = {brand.text}
        icon = {brand.icon}
        />
        )
  return (
    <div className='Mobilebrand'>
    <div className='slideItems'>
        <Carousel wrapAround={false} slidesToShow={5} autoplay={true} autoplayInterval={3000} withoutControls={true} speed={3000}>
            {brandList}
        </Carousel>
    </div>
    </div>
  )
}

export default MobileBrand
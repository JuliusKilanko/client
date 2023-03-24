import React from 'react'
import './brand.scss'
import House from '../../../assets/houseboat.jpg'
import Slider from 'infinite-react-carousel';
import BrandList from './BrandList'
import {IoMdSwitch} from 'react-icons/io'
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

function Brand() {
    const brandList = BrandItems.map(brand => 
        <BrandList 
        text = {brand.text}
        icon = {brand.icon}
        />
        )
  return (
    <div className='brand'>
    <div className='slideItems'>
        <Slider slidesToShow={9} autoplaySpeed={3000} autoplay={true} arrows={false} className="">
            {brandList}
        </Slider>
    </div>
    <div className='filter'>
                <IoMdSwitch />
                <p>Filter</p>
    </div>
    </div>
  )
}

export default Brand
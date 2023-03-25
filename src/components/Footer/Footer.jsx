import React from 'react'
import {GiWorld} from 'react-icons/gi'
import {BsArrowUpCircle} from 'react-icons/bs'
import './footer.scss'

function Footer() {
  const date = new Date().getFullYear()
  const fulldate = `©${date} Mybnb, Inc`

  const lang = `English(UK)`
    const funds = `€(EURO)`
    const support = `Support & Resourses`
  return (
    <div className='generalFooter'>
      <span>{fulldate}</span>
      <ul>
            <li>Term</li>
            <li>Sitemap</li>
            <li>Privacy</li>
            <li>Your privacy choice</li>
            <li>Destination</li>
      </ul>
      <ul>
        <li><GiWorld size={20}/> {lang}</li>
        <li>{funds}</li>
        <li>{support} <BsArrowUpCircle /></li>
      </ul>
    </div>
  )
}

export default Footer
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navbar.css'

export default function Navbar({size,setShow}) {
  return (
    <nav>
        <div className='nav-Box'>
            <span className='my-Shop' onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                <FontAwesomeIcon  icon={faCartPlus} />       
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

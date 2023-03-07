import React from 'react'
import { eventdata } from '../Data'
import '../styles/Events.css'
import Card from './Card'
export default function Events({handleClick}) {
  return (
    <div className='eventList'>
        {
          eventdata.map((item)=>{
            return(
                <Card item={item}  handleClick={handleClick} />
                )
          }  )
        }
    </div >
  )
}

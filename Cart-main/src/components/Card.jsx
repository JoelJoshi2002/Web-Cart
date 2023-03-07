import React from 'react'
import '../styles/card.css'

export default function Card({ item, handleClick }) {

  return (
    <div className='item'>

      <div class="nes-container is-rounded is-dark">
        <div className="img">
          {/* <div className="abs_img" data-bg-img="img/collection/3.jpg"
          style={{"backgroundImage: "url('https://picsum.photos/200');"}}></div> */}
          <img src={item.img} alt="" />

        </div>
        <h3>
          {item.title}
        </h3>
        <p>
          {item.desc}
        </p>
        <h5>
          Price:{item.price}
        </h5>
        {/* <a className='metaportal_fn_button'> */}
        <a class="nes-btn" href="#" onClick={() => handleClick(item)} >Add To Cart</a>
        {/* </a> */}
      </div>
      <input type="hidden" value="img/collection/2.jpg" />
    </div>
  )
}

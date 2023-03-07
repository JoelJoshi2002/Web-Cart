import React,{useEffect, useState} from 'react'
import '../styles/cart.css'

export default function Cart({cart,setCart}) {
  const[price, setPrice] = useState(0);

  const handlePrice= ()=>{
      let ans = 0;
      cart.map((item)=>(
        ans +=1*item.price
      ))
      setPrice(ans);
  }
  const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id!==id);
    setCart(arr);
    //handlePrice();

  }
  useEffect(()=>{
    handlePrice();
  })
  return (
        <article>
           {
            cart.map((item)=>(
              <div className="cart_box" key = {item.id}>
                <div className="cart_img">
                  <img src={item.img} />
                  <p>{item.event}</p>
                </div>
                <div >
                  <span>Price:{item.price}</span>
                  <span class="nes-text is-error">
                    <button type="button" class="nes-btn is-error" onClick={()=>handleRemove(item.id)}>Remove</button>
                  </span>
                </div>
              </div>
            ))}
            <div>
              <span>Total Price of your Cart</span>
              <span >Rs - {price}</span>
            </div>
        </article>
  )
}
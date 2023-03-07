import { useState } from 'react'
import Cart from './components/Cart'
import Events from './components/Events'
import Navbar from './components/Navbar'


function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const[warning, setWarning] = useState(false);

  const handleClick = (item)=>{
    let isPresent = false
    cart.forEach((product)=>{
      if(item.id === product.id)
      isPresent = true
    })
    if (isPresent){
          setWarning(true);
          setTimeout(()=>{
            setWarning(false);
          }, 2000);
          return;
    }
      setCart([...cart,item]);
  }
  return (
    <>
    <Navbar size={cart.length} setShow={setShow}/>
    {
      show ?<Events handleClick={handleClick}/> :<Cart cart ={cart} setCart={setCart} />
    }
    {
      warning && <div className='warning'>Item is already added to your cart</div>
    }
    
    </>
  );
}

export default App

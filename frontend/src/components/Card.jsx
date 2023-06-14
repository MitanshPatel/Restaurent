import React, { useEffect, useRef, useState } from 'react'
import Cardcss from '../astyles/Card.module.css'
import { useDispatchCart, useCart } from './contextReducer';

function Card(props) {
  let data = useCart();                  //data which is sent to other components
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();
  let dispatch = useDispatchCart();      //used to dispatch data to other components thru contextRouter

  let options = props.options;
  let priceOptions = Object.keys(options);

  const handleAddToCart = async () => {
    let food = []          //will store all duplicated items that are added to cart
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;  //will store all duplicated items that are added to cart
        break;
      }
    }
    if (food !== []) {    //if there is a duplicated food added to cart
      if (food.size === size) {         //half is different from full order
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
    return
  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  let finalPrice = qty * parseInt(options[size]);

  return (
    <div className={Cardcss.carddisplay}>
      <div className={`card mt-3 ${Cardcss.cardi}`} style={{ "width": "18rem", "maxHeight": "360px" }}>    {/* mt-3 is margin top 3px */}
        <img src={props.foodItem.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className={`card-title ${Cardcss.titl}`}>{props.foodItem.name}</h5>
          <p className="card-text">{props.foodItem.description}</p>
          <div className='container w-100'>  {/* container is mobile first appoarch, helps in breakpoints; w-100 use 100% width*/}
            <select className='m-2 h-100' onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1} >{i + 1}</option>
                )
              })}
            </select>
            <select className='m-2 h-100' ref={priceRef} onChange={(e) => setSize(e.target.value)} >
              {priceOptions.map((opt) => {
                return (
                  <option key={opt} value={opt} >{opt}</option>
                )
              })}
            </select>
            <span><p className={`d-inline fs-5 ${Cardcss.price}`}>${finalPrice}</p></span>
            <button className={Cardcss.addcart} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

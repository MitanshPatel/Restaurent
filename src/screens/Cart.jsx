import React from 'react'
import css from '../astyles/cart.module.css'
import { useCart, useDispatchCart } from '../components/contextReducer';

function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center text-white fs-3'>The Cart is Empty!</div>
            </div>
        )
    }

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/auth/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });
        if (response.status === 200) {
            dispatch({ type: "DROP" })
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (
        <div className={css.sign}>
            <div className={css.done}>
                <h1 className={css.heading}>Cart Details</h1>
                <h3 className={css.price}>Total Price: {totalPrice}/-</h3>
                <button onClick={handleCheckOut} className={`${css.chckout}`}>Checkout</button>
            </div>
            <div className={css.tabl}>
                <table className="table table-borderless text-white">
                    <thead>
                        <tr>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col">Sr No.</th>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col" colspan="4">Name</th>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col"></th>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col"></th>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col"></th>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col">Quantity</th>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col">Option</th>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col">Amount</th>
                            <th className={`bg-transparent text-white ${css.col}`} scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((food, index) => (


                            <tr>
                                <th className='bg-transparent text-white' scope='row' >{index + 1}</th>
                                <td className='bg-transparent text-white' colspan="7">{food.name}</td>
                                <td className='bg-transparent text-white'>{food.qty}</td>
                                <td className='bg-transparent text-white'>{food.size}</td>
                                <td className='bg-transparent text-white' colspan='2'>{food.price}</td>
                                <td className='bg-transparent text-white'><button type="button" className="btn p-0 text-white" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Delete</button> </td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Cart

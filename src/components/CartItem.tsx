import React from 'react'
import pizzajpg from '../assets/Pizza.png'
import { TiDeleteOutline } from 'react-icons/ti'

const CartItem = () => {
  return (
    <div className="flex items-center justify-between mb-5 border px-10 py-5">
      <div className="w-1/6 mr-3">
        <img src={pizzajpg} alt="pizza" />
      </div>
      <div>
        <h2>Пепперони</h2>
        <span>Тонкое тесто</span>
      </div>
      <div>
        <span>1000 Р</span>
      </div>
      <div>
        <TiDeleteOutline />
      </div>
    </div>
  )
}

export default CartItem

import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart'

const Cart = () => {
  const isFull = true
  return isFull ? (
    <div className="flex flex-col items-center justify-center mb-5">
      <div className="flex items-center justify-between w-2/3 my-10">
        <div className="flex items-center">
          <AiOutlineShoppingCart />
          <span className="ml-2">Корзина</span>
        </div>
        <div className="flex items-center">
          <BsTrash />
          <span className="ml-2">Очистить корзину</span>
        </div>
      </div>
      <div className="flex flex-col">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex items-center justify-between w-2/3 my-10">
        <div className="flex items-center">
          <span className="ml-2">Всего питс: 3шт.</span>
        </div>
        <div className="flex items-center">
          <span className="ml-2">Сумма заказа: 1000 Р</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-2/3">
        <Link to="/" className=" text-white border p-2">
          Вернуться на главную
        </Link>
        <button className=" text-white border p-2">Оплатить</button>
      </div>
    </div>
  ) : (
    <EmptyCart />
  )
}

export default Cart

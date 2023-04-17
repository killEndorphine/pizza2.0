import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="mb-2">
      <div className="flex items-center justify-between p-3">
        <Link to="/">
          <div className="flex items-center">
            <div className="mr-2">
              <FaPizzaSlice />
            </div>
            <span className="uppercase">Делаем питсу!</span>
          </div>
        </Link>
        <div className="ml-4">
          <input className="px-2 py-1 rounded-2xl" placeholder="Найти питсу" />
        </div>
        <div className="flex items-center">
          <div className="ml-3">
            <Link to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
          <div className="ml-5 uppercase">
            <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header

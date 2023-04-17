import React from 'react'
import pizzajpg from '../assets/Pizza.png'

const ShopItem = () => {
  return (
    <div className="flex flex-col items-center my-1  py-2">
      <div className="pb-2">
        <img className="" src={pizzajpg} alt="pizza" />
      </div>
      <h2 className="pb-2">Пепперони</h2>
      <div className="bg-gray-200 mb-2">
        <ul className="flex items-center justify-beetwen">
          <li className="p-2 bg-white m-1 text-base">Тонкое</li>
          <li className="p-2 text-base">Традиционное</li>
        </ul>
        <ul className="flex items-center justify-between">
          <li className="p-2 bg-white m-1 text-base">25 см</li>
          <li className="p-2 text-base">30 см</li>
          <li className="p-2 text-base">40 см</li>
        </ul>
      </div>
      <div className="flex items-center justify-center flex-col">
        <span className="mb-2">от 500 Р</span>
        <div className="flex items-center justify-center">
          <button className=" text-white border p-2 mr-1">Добавить</button>
          <button className=" text-white border p-2 ">Убрать</button>
        </div>
      </div>
    </div>
  )
}

export default ShopItem

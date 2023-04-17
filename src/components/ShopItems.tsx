import React from 'react'
import ShopItem from './ShopItem'

const ShopItems = () => {
  return (
    <div className="p-3 flex flex-col">
      <h1 className="pb-3">Все питсы</h1>
      <div className="grid grid-cols-4 gap-1">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </div>
  )
}

export default ShopItems

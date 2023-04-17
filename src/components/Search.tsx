import React from 'react'
import { BiUpArrow } from 'react-icons/bi'

const Search = () => {
  return (
    <div className="flex justify-between p-3">
      <div>
        <ul className="flex items-center">
          <li className="mr-2 bg-slate-500 text-white px-4 py-0.5 rounded-2xl cursor-pointer hover:bg-black">
            Все
          </li>
          <li className="mr-2 bg-slate-500 text-white px-4 py-0.5 rounded-2xl cursor-pointer hover:bg-black">
            Мясная
          </li>
          <li className="mr-2 bg-slate-500 text-white px-4 py-0.5 rounded-2xl cursor-pointer hover:bg-black">
            Вегитарианская
          </li>
          <li className="mr-2 bg-slate-500 text-white px-4 py-0.5 rounded-2xl cursor-pointer hover:bg-black">
            Гриль
          </li>
          <li className="mr-2 bg-slate-500 text-white px-4 py-0.5 rounded-2xl cursor-pointer hover:bg-black">
            Острая
          </li>
          <li className="mr-2 bg-slate-500 text-white px-4 py-0.5 rounded-2xl cursor-pointer hover:bg-black">
            Закрытая
          </li>
        </ul>
      </div>
      <div className="relative">
        <div className="flex items-center">
          <div>
            <BiUpArrow />
          </div>
          <span>Сортировка по:</span>
          <span className="ml-2 underline">популярности</span>
        </div>
        <div className="absolute left-1/4 hidden">
          <ul className="flex flex-col bg-white w-max p-1">
            <li className="p-2 border border-black">популярности</li>
            <li className="p-2 border border-black">цене</li>
            <li className="p-2 border border-black">алфавиту</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Search

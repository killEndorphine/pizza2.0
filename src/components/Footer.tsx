import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'
import { BsTelegram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="p-3 flex justify-between items-center">
        <div className="flex">
          <span className="mr-2">Питса омномном</span>
          <span className="mr-2">&copy;</span>
          <span className="mr-2">2023</span>
        </div>
        <ul className="flex">
          <li className="mr-4">
            <a href="#">Правовая информация</a>
          </li>
          <li className="mr-4">
            <a href="#">Калорийность и состав</a>
          </li>
          <li className="mr-4">
            <a href="#">Помощь</a>
          </li>
        </ul>
        <ul className="flex">
          <li className="mx-2">
            <a target="_blank" href="https://www.youtube.com/">
              <AiFillYoutube />
            </a>
          </li>
          <li className="mx-2">
            <a target="_blank" href="https://vk.com/">
              <SlSocialVkontakte />
            </a>
          </li>
          <li className="mx-2">
            <a target="_blank" href="https://web.telegram.org">
              <BsTelegram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

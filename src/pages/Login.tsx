import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen max-h-[79vh]">
      <div className="flex flex-col items-center justify-center border w-1/3 h-2/4">
        <h1 className="mb-2 text-white">Вход</h1>
        <div className="mb-1">
          <input className="p-1" placeholder="Введите логин" />
        </div>
        <div className="mb-1">
          <input className="p-1" placeholder="Введите пароль" />
        </div>
        <div className="flex mt-1">
          <button className="mb-2 text-white border p-2 mr-2">Войти</button>
          <Link to="/register" className="mb-2 text-white border p-2">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

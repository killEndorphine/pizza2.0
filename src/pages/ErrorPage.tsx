import React from 'react'
import { Link } from 'react-router-dom'
import { BiError } from 'react-icons/bi'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen max-h-[79vh]">
      <div className="flex flex-col items-center">
        <div>
          <BiError className="h-screen w-screen max-h-[40vh] max-w-[40vh]" />
        </div>
        <span className="mb-5">Произошла ошибка попробуйте позже!</span>
        <Link to="/" className="mb-2 text-white border p-2">
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage

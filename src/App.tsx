import Footer from './components/Footer'
import Header from './components/Header'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="max-w-full w-4/5 m-auto border p-1">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom"
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import CreateAc from './Components/UserInfo/Signin/CreateAc'
import AddProd from './Components/Cart/AddProd'
function App() {

  return (
    <main className='main'>
      <BrowserRouter >
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/LogIn' element={<CreateAc></CreateAc>}></Route>
          <Route path='/cart' element={<AddProd/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </main>
  )
}

export default App

import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import { RiAccountPinBoxFill } from "react-icons/ri";
import { FaCartFlatbed } from "react-icons/fa6";
function Header() {
  return (
    <header className='header'>
        <nav className='nav'>
            <div className="nav1">
                <div className="logo"><img src="https://aztecasoccer.com/cdn/shop/files/azteca-soccer-logo-wide.png?v=1620328558&width=210" alt="" /></div>
                <div className="search"><input type="text" placeholder='What Can I Find ?'/></div>
                <div className="acCart">
                    <Link to='/LogIn'><RiAccountPinBoxFill className='icn'/> </Link>
                    <Link to='/cart'><FaCartFlatbed className='icn'/></Link></div>
            </div>
            <div className="nav2">
                <div className="allLinks">
                    <Link to="" className='l1'>FOOTWEAR</Link>
                    <Link to="" className='l1'>JERSEY</Link>
                    <Link to="" className='l1'>APPAREL</Link>
                    <Link to="" className='l1'>GOALKEEPER</Link>
                    <Link to="" className='l1'>EQUIPMENT</Link>
                    <Link to="" className='l1'>DEALS</Link>
                </div>

                <div className="orderSection">
                <Link to="">Track Order</Link>
                <Link to="">Return</Link>
                <Link to="">GovX</Link>
                <Link to="" className='btn'>Need Help ?</Link>
                </div>
            </div>
        </nav>
    </header>

  )
}

export default Header

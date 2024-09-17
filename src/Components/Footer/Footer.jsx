import React from 'react'
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <di className="fD1">
            <div>
                <p><b>SOCCER STORE SPECIALTY SINCE 1979</b></p><br />
                <p>Azteca Soccer has been serving the Southern California soccer community since 1979 with two locations. Our online shop offers a wide variety of items at the most competitive prices, including the latest releases in cleats, apparel and equipment.</p><br />
                <Link className='followLink'>Follow on Shop</Link>
                <div className='socialMedia'><FaFacebookSquare /><FaYoutube /> <FaInstagram /><RiTwitterXFill /><FaGithub /></div>
            </div>
            <div>
                <Link><p><b>Customer Care</b></p></Link><br />
                <Link><p><b>Start a Return</b></p></Link><br />
                <Link><p><b>Shipping Policy</b></p></Link><br />
                <Link><p><b>Return Policy</b></p></Link><br />
                <Link><p><b>Military & Govt. Discount</b></p></Link><br />
                <Link><p><b>AfterPay FAQ's</b></p></Link><br />
            </div>
            <div>
            <Link><p><b>Quick Links</b></p></Link><br />
                <Link><p><b>Privacy Policy</b></p></Link><br />
                <Link><p><b>Terms of Service</b></p></Link><br />
                <Link><p><b>Collective</b></p></Link><br />
                <Link><p><b>Do not sell my personal information</b></p></Link><br />
            </div>
            <div>
            <Link><p><b>Newsletter</b></p></Link><br />
            <Link><p><b>Sign up for exclusive offers, original stories, events and more.</b></p></Link><br />
           <div>
            <input type="text" name='mail' placeholder='Send Mail..'/>
            <textarea name="" id="" placeholder='Fill Your Enquiry Form Here..'></textarea> 
            <Link><p>Send</p></Link></div>
            </div>
        </di>
        <div className="fD2">
            <div className="lDiv">
                <div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="img"><img src="" alt="" /></div>
                </div>
            </div><br /><hr />
            <div className="lDiv2">
                <div><p><b>© 2024 Azteca Soccer. Powered by MEERSAHABDESIGN</b></p></div>
                {/* <p>Men</p> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer

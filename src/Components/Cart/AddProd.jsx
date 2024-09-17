import React, { useState } from 'react'
import "./AddProd.css"
import axios from "axios"
function AddProd() {
     // {prodName, price, description, photo}
     const [prodName, setProdName] = useState("");
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState();
     const [photo, setPhoto] = useState();
     const [option, setOption] = useState("");
     
    const productHandler = async (e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('prodName', prodName);
        data.append('description', description);
        data.append('price', price);
        data.append('photo', photo);
        data.append('option', option);

       try {
        await axios.post("http://localhost:3000/addProduct", data);
            console.log("Your Product Data has been successfully send to your backend");
       } catch (error) {
        console.log("There is some issue in your Product Data code plz check once this error ", error);
       }
        
    }
    console.log(option);
    

  return (
    <section className='addProd'>
        <div>
            <form onSubmit={productHandler} encType='multipart/form-data'>
                <input type="text" placeholder='Enter Your Product Name' name='prodName' onChange={(e)=>setProdName(e.target.value)}/>
                <input type="text" placeholder='Enter Your Product Details' name='description' onChange={(e)=>setDescription(e.target.value)}/>
                <input type="number" placeholder='Enter Your Product Price' name='price' onChange={(e)=>setPrice(e.target.value)}/>
                <input type="file" name='photo' onChange={(e)=>setPhoto(e.target.files[0])}/>
                <select onChange={(e)=>setOption(e.target.value)}>
                    <option value="FOOTWEAR">FOOTWEAR</option>
                    <option value="JERSEY">JERSEY</option>
                    <option value="APPAREL">APPAREL</option>
                    <option value="GOALKEEPER">GOALKEEPER</option>
                    <option value="EQUIPMENT">EQUIPMENT</option>
                    <option value="DEALS">DEALS</option>
                </select>
                <input type="submit" className='btn' value={"Add Product"}/>
            </form>
        </div>
    </section>
  )
}

export default AddProd

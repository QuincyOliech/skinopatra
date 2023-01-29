import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


function Update() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice]=useState("")
  const [image, setImage]=useState("")
  // for navigation 
  const navigate=useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:8001/products/${id}`)
        .then((r)=>r.json())
        .then((product)=>{
            setTitle(product.title)
            setCategory(product.category)
            setDescription(product.description)
            setPrice(product.price)
            setImage(product.image)
        })

    },[])

    function handleSubmit(e)
    {
     e.preventDefault()

     fetch(`http://localhost:8001/products/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
    },
        body:JSON.stringify({
            title: title, 
            category: category, 
            description: description, 
            price: price, 
            image: image
        })
     })
        .then((r)=>r.json())
        .then(product=>{
          navigate("/products/"+product.id)
        })

    }


  return (
    <div className="update-container">
    <div className='container my-5 py-2'>
      <h3>Update</h3>
      <form onSubmit={handleSubmit}>
          <div className="mb-4 col-md-7 ">
            <input type="text" className="form-control" value={title || ''} onChange={function(e){setTitle(e.target.value)}} placeholder="Title" />
          </div>
          <div className ="mb-4 col-md-7 ">
                <select className="form-control" id="Select1">
                <option>treatments and serums</option>
                <option>cleansers</option>
                <option>moisturizers</option>
                <option>body scrubs & exfoliators</option>
                <option>bath & body</option>
                <option>tools & devices</option>
                <option>lip care</option>
                </select>
         </div>
         <div className="mb-4 col-md-7 ">
            
            <input type="text" className="form-control" value={description || ''} onChange={(e)=> setDescription(e.target.value)} placeholder="Description" />
          </div>
          <div className="mb-4 col-md-7 ">
            
            <input type="text" className="form-control" value={price || ''} onChange={(e)=> setPrice(e.target.value)} placeholder="Price" />
          </div>
          <div className="mb-4 col-md-7 ">
            
            <input type="text" className="form-control" value={image || ''} onChange={(e)=> setImage(e.target.value)} placeholder="Image" />
          </div>
          <button className="update-btn">Update</button>

       </form>
    </div>
   </div> 
  )
}

export default Update
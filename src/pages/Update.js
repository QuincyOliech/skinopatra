import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import {toast} from "react-toastify"


function Update() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice]=useState("")
  const [image_url, setImage_url]=useState("")

  // for navigation 
  const navigate=useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:9292/products/${id}`)
        .then((r)=>r.json())
        .then((product)=>{
            setTitle(product.title)
            setCategory(product.category)
            setDescription(product.description)
            setPrice(product.price)
            setImage_url(product.image_url)
        })

    },[id])

    function handleSubmit(e)
    {
     e.preventDefault()

     fetch(`http://localhost:9292/products/${id}`,{
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
            image_url: image_url
        })
     })
        .then((r)=>r.json())
        .then(product=>{
          navigate("/products/"+product.id)
        })
        toast.success('Updated Successfully')

      

    }
    


  return (
    <div className="update-container">
    <div className='container my-5 py-2 px-5 me-5'>
      <h3 className='h3-update'>Update</h3>
      <form className="form-content" onSubmit={handleSubmit}>
          <div className="mb-4 col-md-7 ">
            <input type="text" className="form-control" value={title || ''} onChange={function(e){setTitle(e.target.value)}} placeholder="Title" />
          </div>
          <div className ="mb-4 col-md-7 ">
          <select type="text" className="form-select form-select-m" id="Select1" value={category || ''} onChange={(e)=> setCategory(e.target.value)} placeholder="Category">
                
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
            
            <input type="text" className="form-control" value={image_url || ''} onChange={(e)=> setImage_url(e.target.value)} placeholder="Image" />
          </div>
          <button className="update-btn">Update</button>

       </form>
    </div>
   </div> 
  )
}

export default Update
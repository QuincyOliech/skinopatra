import React from "react";
import Swal from 'sweetalert2'

function CreateProductForm(){
    //function to handle submission of form
    function handleSubmit(e){
        // prevent reloading 
        e.preventDefault();
    
        const formData={
            title:e.target.title.value,
            category:e.target.category.value,
            description:e.target.description.value,
            price:e.target.price.value,
            image_url:e.target.image_url.value
        };
        fetch("http://localhost:9292/products",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        )
        .then(response=>response.json())
        .then(data=>data)
        // reset input information
        e.target.reset()

        Swal.fire({
            title: 'Success',
            text: 'Added successfully',
            icon: 'success',
            confirmButtonText: 'Exit',
            confirmButtonColor:"green"
          })
    }
    

    return (
        <div className="product-form-container">
            <h4 className="add-product-h4">Add Product</h4>
            <form className="form-content" onSubmit={handleSubmit}>
             <div className="form-group col-md-4 mt-4 mb-4 mx-auto d-block">
                <input className="form-control col-md-4"  name="title" type="text" placeholder="Title" required />
             </div>
             <div className="form-group col-md-4 mt-4 mb-4 mx-auto d-block">
                <input className="form-control" name="category" type="text" placeholder="Category" required/>
            </div>   
            <div className="form-group col-md-4 mt-4 mb-4 mx-auto d-block">
                <input className="form-control" name="description" type="text" placeholder="Description" required/>
            </div>
            <div className="form-group col-md-4 mt-4 mb-4 mx-auto d-block">
                <input className="form-control" name="price" type="text"  placeholder="Price" required/>
            </div>
            <div className="form-group col-md-4 mt-4 mb-4 mx-auto d-block">
                <input className="form-control" name="image_url" type="url" placeholder="Image url" required/>
            </div>
            <div className="add-product-button">
            <button className="add-btn">Add Product</button>
            </div>
            </form>
        </div>
    )
}

export default CreateProductForm
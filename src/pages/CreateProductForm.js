import React from "react";

function CreateProductForm(){
    function handleSubmit(e){
        // prevent reloading 
        e.preventDefault();
    
        const formData={
            title:e.target.title.value,
            category:e.target.category.value,
            description:e.target.description.value,
            price:e.target.price.value,
            image:e.target.image.value
        };
        fetch("http://localhost:8001/products",{
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
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" type="text" placeholder="Title" required />
                <input name="category" type="text" placeholder="Category" required/>
                <input name="description" type="text" placeholder="Description" required/>
                <input name="price" type="text"  placeholder="Price" required />
                <input name="image" type="url" placeholder="Image url" required/>
                <button>Add Product</button>
            </form>
            
        </div>
    )
}

export default CreateProductForm
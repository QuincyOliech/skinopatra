import React from "react";

function CreateProductForm(){
    return (
        <div>
            <form>
                <input name="title" type="text" placeholder="Title" required />
                <input name="category" type="text" placeholder="Category" required/>
                <input name="description" type="text" placeholder="Description" required/>
                <input name="price" type="text" required  placeholder="Price"/>
                <input name="image" type="url" placeholder="Image url"/>
            </form>
        </div>
    )
}

export default CreateProductForm
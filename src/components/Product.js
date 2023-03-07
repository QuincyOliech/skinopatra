import React, {useState,useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import Review from "./Review"
import Swal from 'sweetalert2'

function Product (){
    const {id}=useParams();
    const[product,setProduct]=useState([]);
 
    useEffect(() =>{
       
        const getProduct=async () => {
            const response = await fetch (`http://localhost:9292/products/${id}`);
            setProduct(await response.json());
        }
        getProduct();
    },[id]
    );
   


    function handleClick(e){
        fetch(`http://localhost:9292/products/${id}`,{
        method: 'DELETE'
        }).then(response => response.json())
        .then(data=>{
          return  setProduct(product.filter((product)=>product.id!==id))
        })

        Swal.fire({
            title: 'Success',
            text: 'Deleted Successfully',
            icon: 'success',
            confirmButtonText: 'Exit',
            confirmButtonColor:"green"
          })  
    }
       
    function ShowProduct({product}){
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image_url} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                     <div className="display-review">{ product.reviews && product.reviews.map((review)=> <Review key={review.id} product ={review}/>)}</div>
                 
                    <NavLink to="/cart" className="btn btn-outline-dark px-4 py-2 ms-2">
                        Go to Cart
                    </NavLink>
                    <NavLink to={`/update/${id}`} className="btn btn-outline-primary ms-2 px-4 py-2">Update</NavLink>
                    <NavLink to="/products" onClick={handleClick} className="btn btn-danger ms-2 px-4 py-2 mb-1">
                        DELETE
                    </NavLink>
                    
                   
                   
                    
                </div>

            </>
        )
    }

    return (
        <div>
            <div className="container py-5 ">
            <div className="row justify-content-center py-5">
                  <ShowProduct product={product}/>
                </div>
            </div>

        </div>
    )
}

export default Product;
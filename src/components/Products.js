import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";


function Products ({search}){

   const[products,setProducts]= useState ([]);
   const[loading,setLoading]= useState (false);
   const [productsToDisplay,setproductsToDisplay]= useState ([]);
   
    useEffect(() => {
        fetch("http://localhost:9292/products")
        .then((response) =>response.json())
        .then((data)=>{
            setProducts(data)
            setproductsToDisplay(data)
        })
    },[]) 

   function Loading (){
    return (
        <>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        </>
    )
   }
    
   function filterProduct(category){
    const updatedList=products.filter((x) =>{
        if (category==="All"){
            return true
        }else{
            return x.category === category
        }
    });
    setproductsToDisplay(updatedList)
   }

   const filteredProducts=productsToDisplay.filter((product)=>{
    if (search===""){
        return true
    }else{
        return product.category.toLowerCase().includes(search.toLowerCase())
    }
    
   }) 
   console.log(filteredProducts)
   
    return(
        <div>
            <div className="container my-3 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6-fw-bolder text-center">Categories</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading? <Loading/>:<ShowProducts products={filteredProducts} filterProduct={filterProduct}/>}
                </div>
            </div>
           
        </div>
    )
}
function ShowProducts({products,filterProduct}){
    return (
      <> 
    <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("All")}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("cleansers")}>Cleansers</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("treatments and serums")}>Treatments And Serums</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("moisturizers")}>Moisturizers</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("bath & body")}>Bath & Body</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("body scrubs & exfoliators")}>Body Scrubs & Exfoliators</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("tools & devices")}>Tools & Devices</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("lip care")}
        >Lip Care</button>
        
    </div>
    {products.map((product,index)=>{
        return (
           
              <div className="products-img col-md-4 mb-4 mt-4 " key={index}>
              <div className="card h-100 text-center p-4" key={product.id}>
                <img src={product.image_url} className="card-img-top" alt={product.title} height="400px"/>
                <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                </div>
                </div>
              </div>
        
        )
    })}
    </> 
    )
   }

export default Products;
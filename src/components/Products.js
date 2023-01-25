import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";


function Products (){

   const[products,setProducts]= useState ([]);
   const[filter,setFilter]= useState (products);
   const[loading,setLoading]= useState (false);
   let uploadedComponent=true;

   useEffect(()=>{
    const getProducts = async () =>{
        setLoading(true);
        const response=await fetch("http://localhost:8001/products");
        if (uploadedComponent){
            setProducts(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            console.log(filter)
        }
        return ()=>{
            uploadedComponent=false;
        }
    }
    getProducts();
   },[]);
   
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
    const updatedList=products.filter((x) =>x.category === category);
    setFilter(updatedList);
   }
   function ShowProducts(){
    return (
      <> 
    <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(products)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("cleansers")}>Cleansers</button>
        <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("treatments and serums")}>Treatments And Serums</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("moisturizers")}>Moisturizers</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("bath & body")}>Bath & Body</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("body scrubs & exfoliators")}>Body Scrubs & Exfoliators</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("tools & devices")}>Tools & Devices</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("eye care")}
        >Eye Care</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("lip care")}
        >Lip Care</button>
        
    </div>
    {filter.map((product)=>{
        return (
            <>
              <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img src={product.image} className="card-img-top" alt={product.title} height="300px"/>
                <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                </div>
                </div>
              </div>
            </>
        )
    })}
    </> 
    )
   }
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
                    {loading? <Loading/>:<ShowProducts key={products}/>}
                </div>
            </div>
           
        </div>
    )
}

export default Products;
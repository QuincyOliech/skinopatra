import React, {useState,useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Swal from 'sweetalert';

function Product (){
    const {id}=useParams();
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const[product,setProduct]=useState([]);
    const[loading,setLoading]=useState(false);
    // const [title, setTitle] = useState("")
    // const [category, setCategory] = useState("")
    // const [description, setDescription] = useState("")
    // const [price, setPrice]=useState("")
    // const [image, setImage]=useState("")
 
    useEffect(() =>{
        const getProduct=async () => {
            setLoading(true);
            const response = await fetch (`http://localhost:9292/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]
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
            text: 'Updated successfully',
            icon: 'success',
            confirmButtonText: 'Exit',
            confirmButtonColor:"blue"
          })
          
    }
    
    // const handleCart = (product) => {
    //     if (cartBtn === "Add to Cart"){
    //         dispatch(addItem(product))
    //         setCartBtn("Remove from Cart")
    //     }
    //     else{
    //         dispatch(removeItem(product))
    //         setCartBtn("Add to Cart")
    //     }
    // }
    function Loading (){
        return (
            <>
            <div className="col-md-6" style={{lineHeight: "2"}}>
                <Skeleton height={400}/>
            </div>
            <div className="col-md-6">
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft: "6"}}/>
            </div>
            </>
        )
       }

       
    function ShowProduct(){
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
                    <p className="lead">{product.reviews}</p>
                 
                    <button className="btn btn-outline-dark px-4 py-2">{cartBtn}</button>
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
                    {loading? <Loading/>:<ShowProduct/>}
                </div>
            </div>

        </div>
    )
}

export default Product;
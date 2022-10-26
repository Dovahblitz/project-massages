import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ProductDetail = (req) => {
    const [product, setProduct] = useState([]);
    let id = req.params.id
    
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        axios
            .get('https://massages-pieniazek.herokuapp.com/api/v1/massages/one/' + id)
            .then((res) => {
                
                setProduct(res.data.result)
                console.log('test', res.data.result)
                
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1 className="producttitle"> {product.name}</h1>
            <div className='item-detail'>
                
                    
                    <div className="card-detail">
                        
                        <p className="productdescription">{product.description}</p>
                        <p>{product.price} euros</p>
                        <p className="productduration">{product.duration} minutes</p> 
                         
                        <a className="buttonbooking" href={"booking/"}>Prendre rendez-vous !</a>
                    </div>
                    
                
                
            </div>
        </div>
    );

    
};


export default ProductDetail




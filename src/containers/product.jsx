import React, { useState, useEffect } from 'react'
import axios from 'axios'
import image from '../image/logo-massages.jpg'


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        axios
            .get('https://massages-pieniazek.herokuapp.com/api/v1/massages/all')
            .then((res) => {
                
                setProducts(res.data.result)
                
            })
            .catch((err) => {
                console.log(err);
            });
    };
    

    return (
        <div>
            <h1>Nos massages</h1>
            <p>Cliquez sur "en savoir plus" afin d'avoir une description détaillée du massage. Le tarif appliqué est de 40 euros de l'heure.</p>
            <div className='item-container'>
                {products.map((product) => (
                    
                    <div className="card">
                        <h3>{product.name}</h3>
                        
                        <p>{product.price} euros</p>
                        <p>{product.duration} minutes</p> 
                        <a className="buttonproduct" href={"product/" + product.id}>En savoir plus </a>  
                        
                    </div>
                    
                ))}
                
            </div>
        </div>
    );
};


export default Products




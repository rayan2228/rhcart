import React from 'react'
import Title from './Title'
import product1 from "/public/images/products/product1.jpg"
import product2 from "/public/images/products/product2.jpg"
import product3 from "/public/images/products/product3.jpg"
import product4 from "/public/images/products/product4.jpg"
import product5 from "/public/images/products/product5.jpg"
import product6 from "/public/images/products/product6.jpg"
import product7 from "/public/images/products/product7.jpg"
import product8 from "/public/images/products/product8.jpg"
import SingleProduct from './SingleProduct'
const TreadingProduct = () => {
    return (
        <div className="container pb-16">
            <Title title={" TRENDING PRODUCTS"}/>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
               <SingleProduct image={product1}/>
               <SingleProduct image={product2}/>
               <SingleProduct image={product3}/>
               <SingleProduct image={product4}/>
               <SingleProduct image={product5}/>
               <SingleProduct image={product6}/>
               <SingleProduct image={product7}/>
               <SingleProduct image={product8}/>
            </div>
        </div>

    )
}

export default TreadingProduct
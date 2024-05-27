import React from 'react'
import Title from './Title'
import product1 from "/public/images/products/product1.jpg"
import product2 from "/public/images/products/product2.jpg"
import product3 from "/public/images/products/product3.jpg"
import product4 from "/public/images/products/product4.jpg"
import SingleProduct from './SingleProduct'
const NewArrival = () => {
    return (
        <div className="container pb-16">
            <Title title={"top new arrival"}/>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <SingleProduct image={product1}/>
                <SingleProduct image={product2}/>
                <SingleProduct image={product3}/>
                <SingleProduct image={product4}/>
            </div>
        </div>

    )
}

export default NewArrival
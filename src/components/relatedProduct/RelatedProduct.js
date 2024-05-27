import React from 'react'
import SingleProduct from '../SingleProduct'
import product1 from "/public/images/products/product1.jpg"
import product2 from "/public/images/products/product2.jpg"
import product3 from "/public/images/products/product3.jpg"
import product4 from "/public/images/products/product4.jpg"
import Title from '../Title'
const RelatedProduct = () => {
    return (
        <div className="container pb-16">
            <Title title={"Related products"} />
            <div className="grid grid-cols-4 gap-6">
                <SingleProduct image={product1} />
                <SingleProduct image={product2} />
                <SingleProduct image={product3} />
                <SingleProduct image={product4} />
            </div>
        </div>

    )
}

export default RelatedProduct
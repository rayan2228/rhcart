import React from 'react'
import WishListProduct from './WishListProduct'
import product1 from "/public/images/products/product1.jpg"
const Wishlist = () => {
    return (
        <div className="container gap-6 pt-4 pb-16">
            {/* wishlist */}
            <div className="max-w-6xl mx-auto space-y-4">
               <WishListProduct image={product1}/>
            </div>
            {/* ./wishlist */}
        </div>

    )
}

export default Wishlist
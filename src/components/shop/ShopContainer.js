
import React from 'react'
import product1 from "/public/images/products/product1.jpg"
import Image from 'next/image'
import SingleProduct from '../SingleProduct'
import Sidebar from './Sidebar'

const ShopContainer = () => {
    return (
        <div className="container grid items-start grid-cols-2 gap-6 pt-4 pb-16 md:grid-cols-4">

            <Sidebar />

            {/* products */}
            <div className="col-span-3">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    <SingleProduct image={product1} />
                </div>
            </div>
            {/* ./products */}
        </div>

    )
}

export default ShopContainer
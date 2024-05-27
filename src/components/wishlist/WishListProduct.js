import Image from 'next/image'
import React from 'react'

const WishListProduct = ({image}) => {
    return (
        <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
            <div className="w-28">
                <Image
                    src={image}
                    alt="product 6"
                    className="w-full"
                />
            </div>
            <div className="w-1/3">
                <h2 className="text-xl font-medium text-gray-800 uppercase">
                    Italian L shape
                </h2>
                <p className="text-sm text-gray-500">
                    Availability: <span className="text-green-600">In Stock</span>
                </p>
            </div>
            <div className="text-lg font-semibold text-primary">$320.00</div>
            <a
                href="#"
                className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto"
            >
                add to cart
            </a>
            <div className="text-gray-600 cursor-pointer hover:text-primary">
                <i className="fa-solid fa-trash" />
            </div>
        </div>
    )
}

export default WishListProduct
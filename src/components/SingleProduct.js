import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleProduct = ({ image }) => {
    return (

        <div className="overflow-hidden bg-white rounded shadow group">
            <div className="relative">
                <Image
                    src={image}
                    alt="product 1"
                    className="w-full"
                />
                <div
                    className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100"
                >
                    <a
                        href="#"
                        className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                        title="view product"
                    >
                        <i className="fa-solid fa-magnifying-glass" />
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                        title="add to wishlist"
                    >
                        <i className="fa-solid fa-heart" />
                    </a>
                </div>
            </div>
            <div className="px-4 pt-4 pb-3">
                <Link href="/product/1">
                    <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                        Guyer Chair
                    </h4>
                </Link>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl font-semibold text-primary">$45.00</p>
                    <p className="text-sm text-gray-400 line-through">$55.90</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                    </div>
                    <div className="ml-3 text-xs text-gray-500">(150)</div>
                </div>
            </div>
            <a
                href="#"
                className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary"
            >
                Add to cart
            </a>
        </div>
    )
}

export default SingleProduct
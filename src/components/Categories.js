import Image from 'next/image'
import React from 'react'
import category1 from "/public/images/category/category-1.jpg"
import category2 from "/public/images/category/category-2.jpg"
import category3 from "/public/images/category/category-3.jpg"
import category4 from "/public/images/category/category-4.jpg"
import category5 from "/public/images/category/category-5.jpg"
import category6 from "/public/images/category/category-6.jpg"
import Title from './Title'
import Link from 'next/link'
const Categories = () => {
    return (
        <div className="container py-16">
            <Title title={" shop by category"}/>
            <div className="grid grid-cols-3 gap-3">
                <div className="relative overflow-hidden rounded-sm group">
                    <Image
                        src={category1}
                        alt="category 1"
                        className="w-full"
                    />
                    <Link
                        href="/shop"
                        className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
                    >
                        Bedroom
                    </Link>
                </div>
                <div className="relative overflow-hidden rounded-sm group">
                    <Image
                        src={category2}
                        alt="category 2"
                        className="w-full"
                    />
                    <Link
                        href="/shop"
                        className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
                    >
                        Matrass
                    </Link>
                </div>
                <div className="relative overflow-hidden rounded-sm group">
                    <Image
                        src={category3}
                        alt="category 3"
                        className="w-full"
                    />
                    <Link
                        href="/shop"
                        className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
                    >
                        Outdoor
                    </Link>
                </div>
                <div className="relative overflow-hidden rounded-sm group">
                    <Image
                        src={category4}
                        alt="category 4"
                        className="w-full"
                    />
                    <Link
                        href="/shop"
                        className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
                    >
                        Sofa
                    </Link>
                </div>
                <div className="relative overflow-hidden rounded-sm group">
                    <Image
                        src={category5}
                        alt="category 5"
                        className="w-full"
                    />
                    <Link
                        href="/shop"
                        className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
                    >
                        Living Room
                    </Link>
                </div>
                <div className="relative overflow-hidden rounded-sm group">
                    <Image
                        src={category6}
                        alt="category 6"
                        className="w-full"
                    />
                    <Link
                        href="/shop"
                        className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
                    >
                        Kitchen
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Categories
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = ({ showHide }) => {
    return (
        <nav className="bg-gray-800">
            <div className="container flex">
                <div className="relative items-center hidden px-8 py-4 cursor-pointer bg-primary md:flex group">
                    <span className="text-white">
                        <i className="fa-solid fa-bars" />
                    </span>
                    <span className="hidden ml-2 text-white capitalize">All Categories</span>
                    {/* dropdown */}
                    <div
                        className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
                        style={{ width: 300 }}
                    >
                        <a
                            href="#"
                            className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                        >
                            <Image
                                src="/images/icons/sofa.svg"
                                alt="sofa"
                                className="object-contain"
                                width={20}
                                height={20}
                            />
                            <span className="ml-6 text-sm text-gray-600">Sofa</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                        >
                            <Image
                                src="/images/icons/terrace.svg"
                                alt="terrace"
                                className="object-contain"
                                width={20}
                                height={20}
                            />
                            <span className="ml-6 text-sm text-gray-600">Living Room</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                        >
                            <Image
                                src="/images/icons/bed.svg"
                                alt="bed"
                                className="object-contain"
                                width={20}
                                height={20}
                            />
                            <span className="ml-6 text-sm text-gray-600">Bedroom</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                        >
                            <Image
                                src="/images/icons/office.svg"
                                alt="Outdoor"
                                className="object-contain"
                                width={20}
                                height={20}
                            />
                            <span className="ml-6 text-sm text-gray-600">Outdoor</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                        >
                            <Image
                                src="/images/icons/outdoor-cafe.svg"
                                alt="outdoor"
                                className="object-contain"
                                width={20}
                                height={20}
                            />
                            <span className="ml-6 text-sm text-gray-600">Outdoor</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                        >
                            <Image
                                src="/images/icons/bed-2.svg"
                                alt="Mattress"
                                className="object-contain"
                                width={20}
                                height={20}
                            />
                            <span className="ml-6 text-sm text-gray-600">Mattress</span>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-between flex-grow py-5 md:pl-12">
                    <div className="flex items-center space-x-6 capitalize">
                        <Link
                            href="/"
                            className="text-gray-200 transition hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="text-gray-200 transition hover:text-white"
                        >
                            Shop
                        </Link>
                        <a href="#" className="text-gray-200 transition hover:text-white">
                            About us
                        </a>
                        <a href="#" className="text-gray-200 transition hover:text-white">
                            Contact us
                        </a>
                    </div>
                    {
                        showHide &&
                        <Link
                            href="/login"
                            className="text-gray-200 transition hover:text-white"
                        >
                            Login
                        </Link>
                    }
                </div>
            </div>
        </nav>

    )
}

export default Navbar
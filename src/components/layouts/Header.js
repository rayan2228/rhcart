import React from 'react'
import Image from 'next/image'
import logo from "/public/images/logo.jpeg"
import Link from 'next/link'
const Header = () => {
    return (
        <header className="py-4 bg-white shadow-sm">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image src={logo} alt="Logo" width={128} height={128} />
                </Link>
                <div className="relative flex w-full max-w-xl">
                    <span className="absolute text-lg text-gray-400 left-4 top-3">
                        <i className="fa-solid fa-magnifying-glass" />
                    </span>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="w-full py-3 pl-12 pr-3 border border-r-0 border-primary rounded-l-md focus:outline-none"
                        placeholder="search"
                    />
                    <button className="px-8 text-white transition border bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary">
                        Search
                    </button>
                </div>

                <div className="flex items-center space-x-4">

                    <Link
                        href="/wishlist"
                        className="relative text-center text-gray-700 transition hover:text-primary"
                    >
                        <div className="text-2xl">
                            <i className="fa-regular fa-heart" />
                        </div>
                        <div className="text-xs leading-3">Wishlist</div>
                        <div className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 bg-primary">
                            8
                        </div>
                    </Link>
                    <a
                        href="/cart"
                        className="relative text-center text-gray-700 transition hover:text-primary"
                    >
                        <div className="text-2xl">
                            <i className="fa-solid fa-bag-shopping" />
                        </div>
                        <div className="text-xs leading-3">Cart</div>
                        <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 -top-1 bg-primary">
                            2
                        </div>
                    </a>
                    <a
                        href="#"
                        className="relative text-center text-gray-700 transition hover:text-primary"
                    >
                        <div className="text-2xl">
                            <i className="fa-regular fa-user" />
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </a>



                </div>

            </div>
        </header>

    )
}

export default Header
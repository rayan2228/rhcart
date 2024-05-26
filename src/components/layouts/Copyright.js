import Image from 'next/image'
import React from 'react'
import paymentMethods from "/public/images/methods.png"
const Copyright = () => {
    return (
        <div className="py-4 bg-gray-800">
            <div className="container flex items-center justify-between">
                <p className="text-white">© rhCart - All Right Reserved</p>
                <div>
                    <Image src={paymentMethods} alt="methods" className='h-5 w-60' />
                </div>
            </div>
        </div>

    )
}

export default Copyright
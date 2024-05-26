import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import offer from "/public/images/offer.jpg"
const Ads = () => {
    return (
        <div className="container pb-16">
            <Link href="/">
                <Image src={offer} alt="ads" className="w-full" />
            </Link>
        </div>

    )
}

export default Ads
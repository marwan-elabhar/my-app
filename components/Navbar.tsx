'use client'
import { useCart } from '../context/Cart';
import Link from 'next/link'


export default function Navbar() {

    const { cart } = useCart();

    return (
        <nav className="h-[60px] flex items-center bg-gray-200">
            <div className="flex justify-between items-center container m-auto">
                <Link href="/"><p className="text-black font-semibold">Store</p></Link>
                <div className="flex items-center gap-3">
                    <Link href="/cart"><img src='shopping-cart.svg' />
                    </Link>
                    <p className="rounded-full text-black bg-gray-300 py-1 px-2 flex 
                    justify-center items-center text-xs">{cart.reduce((prev, curr) => prev + curr.quantity, 0)}</p>
                </div>
            </div>
        </nav>
    )
}
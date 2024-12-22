'use client'
import { useCart } from '../context/Cart';

export default function Navbar() {

    const { cartCount } = useCart();

    return (
        <nav className="h-[60px] flex items-center bg-gray-200">
            <div className="flex justify-between items-center w-[1200px] m-auto">
                <p className="text-black font-semibold">Interview Store</p>
                <div className="flex items-center gap-6">
                    <p className="rounded-full text-black bg-gray-300 py-1 px-2 flex justify-center items-center text-xs">{cartCount}</p>
                </div>
            </div>
        </nav>
    )
}
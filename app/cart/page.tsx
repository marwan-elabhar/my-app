'use client'
import { useCart } from "../../context/Cart";
import CartItem from "@/components/CartItem"


export default function Cart() {
    const { cart } = useCart();

    const total = cart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)

    return (
        <div className="container p-4 m-auto mt-4">
            <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
            {
                !cart.length ? <p className="font-semibold">Your cart is empty</p> :
                    <div>
                        <div className="mb-5">
                            {cart.map(cartItem => {
                                return <CartItem key={cartItem.id} product={cartItem} />
                            }
                            )}
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="text-white bg-blue-500 font-semibold rounded p-4">Continue Checkout</button>
                            <div className="flex gap-2 text-lg font-bold">
                                <p>Total:</p>
                                <p>${total.toFixed(2)}</p>

                            </div>

                        </div>
                    </div>
            }



        </div>
    )
}
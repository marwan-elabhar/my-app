import { Product } from '@/components/Card';
import { useCart } from "../context/Cart";



export default function CartItem({ product }: { product: Product }) {
    const { removeFromCart, decreaseProductQuantity, addToCart } = useCart();



    return (
        <div className='flex justify-between mt-3 border-b py-4'>
            <div className='flex items-center gap-2'>
                <img src={product.thumbnail} alt="product-thumbnail" className='w-16 h-16' />
                <div>
                    <p className='text-lg font-semibold'>{product.title}</p>
                    <p className='text-gray-600'>${product.price} each</p>
                </div>

            </div>
            <div className='flex items-center gap-3'>
                <div className='flex items-center'>
                    <button onClick={() => decreaseProductQuantity(product.id)} className='bg-gray-600 text-white px-2 py-1 rounded-l'>-</button>
                    <p className='px-4'>{product.quantity}</p>
                    <button onClick={() => addToCart(product)} className='bg-gray-600 text-white px-2 py-1 rounded-r'>+</button>
                </div>
                <button onClick={() => removeFromCart(product.id)} className='text-red-500'>Remove</button>
                <p className='font-bold'>${product.quantity * product.price}</p>
            </div>

        </div>
    )
}
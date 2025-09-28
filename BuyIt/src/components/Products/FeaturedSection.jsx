import React from 'react'
import { GiShoppingBag } from "react-icons/gi";
import { HiArrowPathRoundedSquare, HiOutlineCreditCard } from "react-icons/hi2";
function FeaturedSection() {
  return (
    <section className="py-16 px-4 bg-white ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
            {/* f1 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <GiShoppingBag className='text-xl' />
                </div>
                <h4 className="tracking-tighter">FREE INTERNATIONAL SHIPPING</h4>
                <p className="text-gray-600 text-sm tracking-tighter">On all order over $999.00</p>
            </div>
            {/* f2 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiArrowPathRoundedSquare className='text-xl' />
                </div>
                <h4 className="tracking-tighter">20 DAYS RETURN</h4>
                <p className="text-gray-600 text-sm tracking-tighter">Money Back Guarantee</p>
            </div>
            {/* f3 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiOutlineCreditCard className='text-xl' />
                </div>
                <h4 className="tracking-tighter">SECURE CHECKOUT</h4>
                <p className="text-gray-600 text-sm tracking-tighter">100% Secure</p>
            </div>
        </div>
    </section>
  )
}

export default FeaturedSection

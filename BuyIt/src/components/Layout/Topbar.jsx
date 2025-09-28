import React from 'react'
import { TiSocialFacebookCircular } from "react-icons/ti";
import {IoLogoInstagram} from "react-icons/io"
import {RiTwitterXLine} from "react-icons/ri"

function Topbar() {
  return (
    <div className='bg-[#32174d] text-white'>
        <div className='container mx-auto flex justify-between items-center py-3 px-4'>
            <div className='hidden md:flex items-center space-x-4'>
                <a href="#" className='hover:text-gray-300'>
                    <TiSocialFacebookCircular className='h-5 w-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-4 w-4' />
                </a>
            </div>
            <div className='text-sm text-center flex-grow'>
                <span>We ship the love world-Wide!</span>
            </div>
            <div className='tex-sm hidden md:block'>
                <a href="tel:12345" className='hover:text-gray-300'> 12345</a>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar

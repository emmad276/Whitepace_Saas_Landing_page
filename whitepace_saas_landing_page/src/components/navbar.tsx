import React from 'react'
import Image from 'next/image'
import Logo from "@/public/Logo.png"

const Navbar = () => {
  return (
    <div className='items-center absolute left-[1px] flex bg-[#043873] w-[1920px] h-[92px] pt-[16px] pr-[220px] pb-[16px] pl-[220px] justify-between'>
    <div className='w-[191px] h-[34px] justify-between '>
      <Image src={Logo} alt=''></Image>
    </div>
    <div className='w-[737.5px] h-[60px] gap-[60px] flex items-center'>
      <div className='w-[549px] h-[23px] gap-[32px] flex items-center'>
        <div className='w-[78px] h-[23px] text-white'>Products</div>
        <div className='w-[79px] h-[23px] gap-[10px] text-white'>Solutios</div>
        <div className='w-[89px] h-[23px] gap-[10px] text-white'>Resources</div>
        <div className='w-[58px] h-[23px] gap-[10px] text-white'>Pricing</div>
      </div>
      <div className='w-[126px] h-[60px] gap-[24px]'>
        <div className='w-[126px] h-[60px] rounded-lg py-[16px] px-[40px] gap-[10px] bg-[#FFE492]'>
          <p className='w-[46px] h-[23px] font-inter font-medium text-lg leading-[23px] tracking-[-0.32px] text-[#043873]'>Login</p>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default Navbar
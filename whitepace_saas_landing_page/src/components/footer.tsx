import React from 'react'
import Image from 'next/image'
import Logo from "@/public/Logo.png"
import Btm from "@/public/Btm.png"

const Footer = () => {
  return (
    <div className='w-[1920px] h-[461px] absolute top-[5195px] left-[1px] pt-[140px] px-[220px] pb-[32px] gap-[200px] bg-[#043873]'>
        <div className='w-[1480px] h-[289px] gap-[100px]'>
            <div className='w-[1480px] h-[169px] gap-[100px] flex items-start mb-20'>
                <div className='w-[295px] h-[169px] gap-[15px]'>
                    <Image src={Logo} alt=''></Image>
                    <p className='font-inter mt-4 w-[240px] h-[120px] font-normal text-lg leading-[30px] tracking-[-0.32px] text-[#F7F7EE]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>
                <div className='w-[295px] h-[127px] gap-[15px] space-y-3 font-light'>
                    <div className='font-inter w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.32px] text-[#FFFFFF]'>Product</div>
                    <div className=' font-inter w-[70px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.32px] text-[#FFE492]'>Overview</div>
                    <div className='font-inter w-[50px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.32px] text-[#FFFFFF]'>Pricing</div>
                    <div className='font-inter w-[177px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.32px] text-[#FFFFFF]'>Customer stories</div>
                </div>
                <div className='w-[295px] h-[130px] gap-[16px] space-y-3 '>
                    <div className='font-inter w-[91px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.32px] text-[#FFFFFF]'>Resources</div>
                    <div className=' font-inter w-[33px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.32px] text-[#FFFFFF]'>Blog</div>
                    <div className='font-inter w-[128px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.32px] text-[#FFFFFF]'>Guides & tutorials</div>
                    <div className='font-inter w-[130px] h-[20px] font-normal text-base leading-[-0.32px] tracking-[-0.32px] text-[#FFFFFF]'>Help center</div>
                </div>
                <div className='w-[295px] h-[130px] gap-[16px] space-y-3'>
                    <div className='font-inter w-[83px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.32px] text-[#FFFFFF]'>Company</div>
                    <div className='font-inter w-[66px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.32px] text-[#FFFFFF]'>About us</div>
                    <div className='font-inter w-[62px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.32px] text-[#FFFFFF]'>Careers
                    </div>
                    <div className='font-inter w-[99px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.32px] text-[#FFFFFF]'>Media kit</div>
                </div>
            </div>
            <div className='w-[1480px] border rotate-0 text-center'></div>
            <div className='w-[1480px] h-[20px] justify-between mt-3'>
                <Image src={Btm} alt=''></Image>
            </div>
        </div>
    </div>
  )
}

export default Footer
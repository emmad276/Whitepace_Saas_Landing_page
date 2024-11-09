import React from 'react'
import Image from 'next/image'
import Butt from "@/public/Butt.png"

const Hero = () => {
  return (
    <div  className=' absolute top-[92px] left-[1px] items-center pt-[140px] pr-[220px] pb-[140px] pl-[220px] w-[1920px] h-[829px] bg-[#043873] text-white flex'>
        <div className='w-[656px] items-center h-[361px] gap-[60px] gap-y-[60px]'>
            <h2 className='font-inter font-bold size-16  text-[64px] w-[656px] h-[154px] leading-[77.45px] gap-6 '>Get More Done with whitepace</h2>
            <p className='w-[656px] h-[60px] text-lg font-normal leading-[30px] pt-5 font-inter'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            <button className='w-[219px] h-[63px] rounded-lg  gap-[10px] mt-24'>
                <Image src={Butt} alt=''></Image>
            </button>
        </div>
        <div className='w-[824px] h-[549px] gap-1 bg-[#C4DEFD]'></div>
    </div>
  )
}

export default Hero
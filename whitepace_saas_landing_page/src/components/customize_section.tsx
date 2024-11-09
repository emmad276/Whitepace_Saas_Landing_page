import React from 'react'
import Image from 'next/image'
import Illustration from "@/public/Illustration.png"
import letsgo from "@/public/letsgo.png"

const Customize_section = () => {
  return (
    <div>
        <div className='flex w-[1921px] h-[759px] absolute top-[2509px] left-[1px] py-[140px] px-[220px] gap-[98px] bg-[#043873] items-center'>
            <div className='w-[697px] h-[294px] gap-[60px] '>
                <div className='w-[697px] h-[171px] gap-[24px] '>
                    <h1 className='font-inter w-[697px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.32px] text-[#FFFFFF]'>Use as Extension</h1>
                    <p className='pt-5 font-inter w-[697px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.32px] text-[#FFFFFF]'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                </div>
                <div className='mt-14'>
                    <Image src={letsgo} alt=''></Image>
                </div>
            </div>
            <div className='w-[686px] h-[479px] gap-[4px]'>
                <Image src={Illustration} alt=''></Image>
            </div>
        </div>
        <div className='flex items-center w-[1921px] h-[812.09px] absolute top-[3268px] left-[1px] py-[140px] px-[220px] gap-[98px]'>
            <div className='w-[714px] h-[532.09px] gap-[4px]'>
                <Image src={Illustration} alt=''></Image>
            </div>
            <div className='w-[669px] h-[411px] gap-[60px] '>
                <div className='w-[669px] h-[288px] gap-[24px] items-center'>
                    <h1 className='font-inter w-[669px] h-[174px] font-bold text-7xl leading-[87.14px] tracking-[-0.32px] text-[#212529] '>Customise it to your needs</h1>
                    <p className='pt-5 font-inter w-[669px] h-[90px] font-normal text-lg leading-[30px] tracking-[-0.32px] text-[#212529]'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                </div>
                <div className='mt-3'>
                    <Image src={letsgo} alt=''></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customize_section
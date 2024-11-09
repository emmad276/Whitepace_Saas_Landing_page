import React from 'react'
import Image from 'next/image'
import Apple from "@/public/Apple.png"
import google from "@/public/google.png"
import microsoft from "@/public/microsoft.png"
import slack from "@/public/slack.png"

const Our_sponsors = () => {
  return (
    <div className=' items-centerw-[1922px] h-[538px] absolute top-[4654px] py-[140px] px-[220px] bg-white'>
        <div className='font-inter items-center w-[1482px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.32px] text-center'><h1>Our Sponsors</h1></div>
        <div className='w-[1482px] h-[71px] flex justify-between  mt-20'>
            <Image src={Apple} alt=''></Image>
            <Image src={google} alt=''></Image>
            <Image src={microsoft} alt=''></Image>
            <Image src={slack} alt=''></Image>

        </div>
    </div>
  )
}

export default Our_sponsors
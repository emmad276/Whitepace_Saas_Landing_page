import React from 'react'
import Image from 'next/image'
import get from "@/public/get.png"
import work from "@/public/work.png"
import Try from "@/public/try.png"
const Work_management = () => {
  return (
    <div className='absolute top-[921px] left-[1px] gap-[100px] w-[1920px] h-[1588px] pt-[140px] pr-[220px] pb-[140px] pl-[100px] bg-white '>
      <div className='flex w-[1480px] h-[547px] gap-[60px] items-center'>
        <div className='w-[672px] h-[411px] gap-[60px] items-center'>
          <h1 className='w-[672px] h-[174px] font-bold text-7xl leading-[87.14px] text-[#212529] font-inter'>Project Management</h1>
          <p className='mt-5 w-[672px] h-[90px] font-normal text-lg leading-[30px] test-[#212529] font-inter'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <div className='mt-14'><Image src={get} alt=''></Image></div>
        </div>
        <div className='w-[748px] h-[547px] bg-[#C4DEFD]'></div>
      </div>
      <div className='items-center w-[1480px] h-[661] bg-white flex gap-[100px] mt-24'>
          <div><Image src={work} alt=''></Image></div>
        <div className='w-[670px] h-[294px] gap-[60px] items-center'>
          <h1 className=' text-[#212529] w-[670px] h-[87px] font-bold leading-[87.14px] text-7xl font-inter'>Work together</h1>
          <p className='mt-5 text-[#212529] w-[670px] h-[60px] font-normal leading-[]30px text-lg font-inter'>With whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.</p>
          <div className='mt-14'><Image src={Try} alt=''></Image></div>

        </div>
      </div>
    </div>
  )
}

export default Work_management
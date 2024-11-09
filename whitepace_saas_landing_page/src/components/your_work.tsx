import React from 'react'
import Image from 'next/image'
import Try_button from "@/public/Try_button.png"


const Your_work = () => {
    return (
        <div className='absolute top-[4080px] left-[1px] w-[1921px] h-[574px] bg-[#043873] flex items-center justify-center'>
          <div className='w-[1481px] h-[294px] flex flex-col items-center gap-[60px]'>
            <div className='text-center'>
              <h1 className='font-bold text-7xl text-[#FFFFFF] tracking-[-0.32px] leading-[87.14px] font-inter'>
                Your work, everywhere you are
              </h1>
              <p className='font-inter mt-4 font-normal text-lg text-[#FFFFFF] leading-[30px] tracking-[-0.32px] max-w-[1064px]'>
                Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
              </p>
            </div>
            <div className='mt-1'>
              <Image src={Try_button} alt='Try Button' />
            </div>
          </div>
        </div>
      );
}

export default Your_work
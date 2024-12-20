import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="contact"/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl'>Our Store</p>
          <p className=''>1234 Market Street, Sector 15 <br/> Bengaluru, Karnataka 560001, India</p>
          <p className='text-sm'>Tel : (123) 534-1295 <br /> Email : admin@wishly.com</p>
          <p className='font-semibold text-xl'>Carees at Wishly</p>
          <p className=''>Learn more about our teams and job openings</p>
          <button className='border border-current px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
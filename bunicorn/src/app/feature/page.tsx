import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <div className='flex justify-center items-center h-screen w-full bg-teal-400 text-3xl font-bold'>
        <h1>This is feature page</h1>
      </div>

      <Footer />
    </div>
  )
}

export default page
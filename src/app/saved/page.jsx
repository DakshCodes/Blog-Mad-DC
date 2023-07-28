import BlogCard from '@/components/blogCard/BlogCard'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import './saved.css'

const page = () => {
    return (<>
    <Navbar />
    <div className='saved-main'>
        <div className="loader">
            <h1>SAVED</h1>
            <h2>PAGE</h2>
        </div>
        <h1 className='head'>My-Saved</h1>
        <div className="container">
            <BlogCard />
        </div>
    </div>
</>
  )
}

export default page

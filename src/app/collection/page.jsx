import BlogCard from '@/components/blogCard/BlogCard'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import './collection.css'

const Page = () => {
    return (<>
        <Navbar />
        <div className='collection-main'>
            <div className="loader">
                <h1>COLLECTION</h1>
                <h2>PAGE</h2>
            </div>
            <h1 className='head'>My-Collection</h1>
            <div className="container">
                <BlogCard />
            </div>
        </div>
    </>
    )
}

export default Page

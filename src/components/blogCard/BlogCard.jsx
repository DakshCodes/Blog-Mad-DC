'use client'

import React, { useEffect, useState } from 'react'
import './card.css';
import pic from '../../app/auth/man.jpg'
import Image from 'next/image';
import Link from 'next/link';


const BlogCard = ({ blog, id }) => {
  return (
    <div className="card">
      <Link href={'/blog/:id'}>
        <div className="card-header">
          <Image src={pic}
            width={500}
            height={500}
            alt="Picture of the author" />
        </div>
      </Link>
      <div className="card-body">
        <span className="tag tag-teal">Technology</span>
        <h4>
          Why is the Tesla Cybertruck designed the way it
          is?
        </h4>
        <p>
          An exploration into the truck's polarising design
        </p>
        <div className="user">
          <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
          <div className="user-info">
            <h5>July Dec</h5>
            <small>2h ago</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
'use client'

import React, { useEffect, useState } from 'react'
import './card.css';


const BlogCard = ({ blog, id }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="rover" />
      </div>
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
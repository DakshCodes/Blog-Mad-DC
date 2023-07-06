"use client";
import React, { useEffect } from "react"
import './globals.css'
import { gsap } from 'gsap/dist/gsap'
import BlogCard from "@/components/blogCard/BlogCard";
import Navbar from "@/components/navbar/Navbar";
// async function fetchBlogs() {
//   const res = await fetch('http://localhost:3000/api/customers/blog/get', { cache: 'no-store' })
//   // console.log(res);
//   return res.json();
// }
export default async function Home() {
  // const data = await fetchBlogs()
  // const blogs = data.blogs;

  // useEffect(() => {
  //   gsap.from(".loader h1", 2, {
  //     opacity: 0,
  //     x: 800
  //   }, 'start')
  //   gsap.from(".loader h2", 2, {
  //     opacity: 0,
  //     x: -800
  //   }, 'start')
  // }, [])



  return (
    <>
      <Navbar />
      <div className="main" id="scrollbar1">
        {/* <!-- LOADER --> */}
        <div className="loader">
          <h1>BLOGS</h1>
          <h2>PAGE</h2>
        </div>
        {/* <h1 className="heading">Technology</h1> */}
        <div className="container">
        
        </div>
      </div>
    </>
  )
}

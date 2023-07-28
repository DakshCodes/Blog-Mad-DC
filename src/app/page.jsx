"use client";
import React, { useContext, useEffect } from "react"
import './globals.css'
import { gsap } from 'gsap/dist/gsap'
import BlogCard from "@/components/blogCard/BlogCard";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Context } from "@/components/Clients";
import toast from "react-hot-toast";
// async function fetchBlogs() {
//   const res = await fetch('http://localhost:3000/api/customers/blog/get', { cache: 'no-store' })
//   // console.log(res);
//   return res.json();
// }
export default async function Home() {
  const router = useRouter();
  const { user } = useContext(Context);

  useEffect(() => {
    if (!user) {
      toast.error("Please Login to Continue");
      router.push("/auth")
    }
  }, [])

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
      <Navbar user={user} />
      <div className="loader">
        <h1>BLOGS</h1>
        <h2>PAGE</h2>
      </div>
      <div className="main" id="scrollbar1">
        {/* <!-- LOADER --> */}
        {/* <h1 className="heading">Technology</h1> */}
        <div className="container">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  )
}

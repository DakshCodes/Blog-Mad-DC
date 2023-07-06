'use client'
import React, { useEffect } from 'react'
import './nav.css';
import { HiSearch } from 'react-icons/hi';
import { gsap } from 'gsap/dist/gsap'
import { Expo } from 'gsap/dist/gsap';
import { TweenMax } from 'gsap/dist/gsap';
import { Power3 } from 'gsap';
import Link from 'next/link';

const Navbar = () => {
  // useEffect(() => {
  //   gsap.from(".logo", 2, {
  //     opacity: 0,
  //     x: -20,
  //     ease: Expo.easeInOut
  //   })

  //   TweenMax.staggerFrom("nav ul li", 3, {
  //     opacity: 0,
  //     x: -20,
  //     ease: Power3.easeInOut
  //   }, 0.08)

  //   gsap.from(".btn", 3, {
  //     opacity: 0,
  //     delay: .5,
  //     y: -20,
  //     ease: Expo.easeInOut
  //   })
  //   gsap.from(".search", 2, {
  //     opacity: 0,
  //     delay: .5,
  //     x: -20,
  //     ease: Expo.easeInOut
  //   })
  // }, [])

  return (
    <nav>
      <div className="logo">
        <span>TechPedia</span>
      </div>
      <div className='search'>
        <div className="search-container">
          <form>
            <input type="text" placeholder="Search....." name="search" />
            <button>
              <HiSearch />
            </button>
          </form>
        </div>
      </div>
      <ul>
        <li><a href="#">Collection</a></li>
        <li><a href="#">Create Blog</a></li>
        <li><a href="#">Saved</a></li>
      </ul>
      <div className='btn'>
        <Link href={'/auth'}>
          <button>Sign Up</button>
        </Link>
      </div>
      {/* <div className="img">
        <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="rounded-full w-28 " alt="profile picture" />
      </div> */}
    </nav>
  )
}

export default Navbar
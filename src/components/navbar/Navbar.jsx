'use client'
import React, { useContext, useEffect } from 'react'
import './nav.css';
import { HiSearch } from 'react-icons/hi';
import { gsap } from "gsap";
import Link from 'next/link';
import { Expo } from 'gsap/dist/gsap';
import { Context } from '../Clients';
import { useRouter } from 'next/navigation';

const { useLayoutEffect, useRef } = React;


const Navbar = ({ user }) => {
  const app = useRef();
  const circle = useRef();
  const router = useRouter()
  // const { user } = useContext(Context);
  // console.log(user);
  const handleClick = async () => {
    // alert("click")
    localStorage.clear();
    router.push("/auth");
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      const tl = gsap.timeline();
      tl
        .from(".logo", 2, {
          opacity: 0,
          x: -20,
          ease: Expo.easeInOut
        })
        .from("nav ul li", 3, {
          opacity: 0,
          x: -20,
          stagger: 0.5,
          ease: Expo.easeInOut
        }, 0.08)
        .from(".btn", 3, {
          opacity: 0,
          y: -20,
          delay: -2,
          ease: Expo.easeInOut
        })
        .from(".img", 3, {
          opacity: 0,
          y: -20,
          delay: -2,
          ease: Expo.easeInOut
        })
        .from(".search", 2, {
          opacity: 0,
          x: -20,
          delay: -1.4,
          ease: Expo.easeInOut
        })

    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={app}>
      <div className="logo">
        <Link href={'/'}>
          <span>TechPedia</span>
        </Link>
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
        <li className='active'><Link href={'/collection'}>Collection</Link></li>
        <li><Link href={'/create-blog'}>Create Blog</Link></li>
        <li><Link href={'/saved'}>Saved</Link></li>
      </ul>
      {user ? (
        <div className="img">
          <img src={user?.profilePic || "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} className="rounded-full w-28 " alt="profile picture" />
          <button onClick={handleClick}>LogOut</button>
        </div>
      ) : (
        < div className='btn'>
          <Link href={'/auth'}>
            <button>Sign Up</button>
          </Link>
        </div>
      )



      }
    </nav >
  )
}

export default Navbar
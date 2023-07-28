'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import './register.css'
import { TfiBackLeft } from 'react-icons/tfi'
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link';

const Auth = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginemail, setloginEmail] = useState("")
    const [loginpassword, setLoginPassword] = useState("")

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username === '' || email === '' || password === '') {
            toast.error("Fill all fields")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }

        try {
            const res = await fetch('/api/customers/register', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ username, email, password })
            })

            console.log(await res.json())
            if (res.ok) {
                toast.success("Successfully registered the user")
                setTimeout(() => {
                    toast.info("Now you can Login")
                }, 2000)
            } else {
                toast.error("Error occured while registering")
                return
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleloginSubmit = async (e) => {
        e.preventDefault()

        if (loginpassword === '' || loginemail === '') {
            toast.error("Fill all fields!")
            return
        }

        try {
            const res = await fetch('/api/customers/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ loginemail, loginpassword })
            })

            if (res.ok) {
                const data = await res.json()
                toast.success("Successfully Login")
                localStorage.setItem(
                    process.env.REACT_APP_LOCALHOST_KEY,
                    JSON.stringify(data.user)
                );
            } else {
                toast.error("Error occured while Login")
                return
            }
            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }


    // const navigate = () => {
    //     router.push("/");
    // }


    const handlloginpageopen = (e) => {
        const signupBtn = document.getElementById('signup');
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if (element !== "slide-up") {
                parent.classList.add('slide-up')
            } else {
                signupBtn.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    }
    const handlregisterpageopen = (e) => {
        const loginBtn = document.getElementById('login');
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
            if (element !== "slide-up") {
                parent.classList.add('slide-up')
            } else {
                loginBtn.parentNode.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    }

    return (<>
        <div className='main-register'>
            <div className="loader">
                <h1>JOIN</h1>
                <h2>PAGE</h2>
            </div>
            {/* <div className="back" onClick={navigate}>
                Home
                <TfiBackLeft />
            </div> */}
            <div class="form-structor">
                <div class="signup ">
                    <h2 class="form-title" id="signup" onClick={handlregisterpageopen}><span>or</span>Sign up</h2>
                    <div class="form-holder">
                        <input type="text" class="input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" class="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" class="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit} class="submit-btn">Sign up</button>
                </div>
                <div class="login slide-up">
                    <div class="center">
                        <h2 class="form-title" id="login" onClick={handlloginpageopen}><span>or</span>Log in</h2>
                        <div class="form-holder">
                            <input type="email" class="input" placeholder="Email" onChange={(e) => setloginEmail(e.target.value)} />
                            <input type="password" class="input" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
                        </div>
                        <button class="submit-btn" onClick={handleloginSubmit}>Log in</button>
                        <div className="forget">
                            <span>
                                <Link href={'/forget'}>Forgot Password ?</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    </>
    )
}

export default Auth
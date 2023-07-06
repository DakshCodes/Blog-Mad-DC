'use client'

import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { signIn } from 'next-auth/react'
// import { Context } from '@/components/Clients'
import './login.css'
import { TfiBackLeft } from 'react-icons/tfi'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter();

    const navigate = () => {
        router.push("/");
    }

    return (<>
        <div classNameName='login'>
            <div className="back" onClick={navigate}>
                Home
                <TfiBackLeft />
            </div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button>Log In</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i> Google</div>
                </div>
            </form>
        </div>
    </>
    )
}

export default Login
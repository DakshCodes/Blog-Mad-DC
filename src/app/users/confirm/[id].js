'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import gif from "../assets/verify.gif"
import gif2 from "../assets/error.gif"
import Link from 'next/link';

const Verified = () => {

    const { token } = useParams();
    const [valid, setValid] = useState(false);

    const verifyEmailUrl = async () => {

        try {

            const response = await fetch('/api/customers/:token', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ token })
            })
            console.log(response)
            if (response.success || response.ok) {
                setValid(true)
            } else {
                setValid(false)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        verifyEmailUrl()
    }, [])

    return (
        (valid ?

            <div className='flex flex-col justify-center items-center h-[100vh] border border-solid border-black'>
                <div className="m-auto flex flex-col items-center">
                    <img src={gif} alt="" className='h-[4.5rem] w-fit' />
                    Your account has been verified
                    <div>
                        Got to <Link href={"/auth"}><span className="underline">Login Page</span></Link>
                    </div>
                </div>
            </div>

            :
            <div className='flex flex-col justify-center items-center h-[100vh] border border-solid border-black'>
                <div className="m-auto flex flex-col items-center">
                    <img src={gif2} alt="" className='h-[4.5rem] w-fit' />
                    Something went wrong
                    <div>
                        Got to <Link to="/login"><span className="underline">Login Page</span></Link>
                    </div>
                </div>
            </div>
        )



    )
}

export default Verified

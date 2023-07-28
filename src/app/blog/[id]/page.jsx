"use client"
import React, { useEffect, useState } from 'react'
import './blog.css'
import { TfiBackLeft } from 'react-icons/tfi'
import { BsFillSaveFill } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const BlogDetails = () => {
    // const [blogDetails, setBlogDetails] = useState("")
    // const [isLiked, setIsLiked] = useState(false)
    // const [blogLikes, setBlogLikes] = useState(0)

    // const [commentText, setCommentText] = useState("")
    // const [comments, setComments] = useState([])
    // const id = location.pathname.split("/")[2]
    // const { user } = useContext(Context);


    const router = useRouter();

    const navigate = () => {
        router.push("/");
    }


    // useEffect(() => {

    //     async function fetchComments() {
    //         const res = await fetch(`/api/customers/blog/comment/${id}/getcomment`)
    //         const comments = await res.json()
    //         setComments(comments.comments)
    //     }
    //     fetchComments()
    // }, [])

    // useEffect(() => {
    //     async function fetchBlog() {
    //         const res = await fetch(`/api/customers/blog/${id}/getblog`, {
    //             method: "GET"
    //         })
    //         const blog = await res.json()
    //         // console.log(blog.blog);
    //         setBlogDetails(blog.blog)
    //         setIsLiked(blog?.likes?.includes(user?._id))
    //         setBlogLikes(blog?.likes?.length || 0)
    //     }
    //     fetchBlog();
    // }, [])




    // const handleDelete = async () => {
    //     try {
    //         const confirmModal = confirm("Are you sure you want to delete your blog?")

    //         if (confirmModal) {
    //             const res = await fetch(`/api/customers/blog/${id}/deleteblog`, {
    //                 method: "DELETE"
    //             })
    //             // console.log(res);
    //             if (res.ok) {
    //                 router.push('/')
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleLike = async () => {
    //     try {
    //         const res = await fetch(`/api/customers/blog/${id}/like/putlike`, {
    //             method: 'PUT'
    //         })
    //         // console.log(res)
    //         if (res.ok) {
    //             if (isLiked) {
    //                 setIsLiked(prev => !prev)
    //                 setBlogLikes(prev => prev - 1)
    //             } else {
    //                 setIsLiked(prev => !prev)
    //                 setBlogLikes(prev => prev + 1)
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleComment = async () => {
    //     if (commentText?.length < 2) {
    //         toast.error("Comment must be at least 2 characters long")
    //         return
    //     }

    //     try {
    //         const body = {
    //             blogId: ctx.params.id,
    //             authorId: user?._id,
    //             text: commentText
    //         }

    //         const res = await fetch(`/api/comment`, {
    //             method: "POST",
    //             body: JSON.stringify(body)
    //         })

    //         const newComment = await res.json()

    //         setComments((prev) => {
    //             return [newComment, ...prev]
    //         })

    //         setCommentText("")
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div className='main-detail'>
            <div className="loader">
                <h1>BLOG</h1>
                <h2>DETAIL</h2>
            </div>
            <span className='save-icon'>
                <BsFillSaveFill />
                <span>Save</span>
            </span>
            <div className="back" onClick={navigate} >
                <TfiBackLeft />
            </div>
            <div class="card">
                <div class="thumbnail">
                    <img class="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg" />
                </div>
                <div className='detail-scroll'>
                    <div class="right">
                        <p className='date'>12 January</p>
                        <h1 >Why you Need More Magnesium in Your Daily Diet</h1>
                        <div class="author">
                            <img src="https://randomuser.me/api/portraits/men/95.jpg" />
                            <h2>Igor MARTY</h2>
                        </div>
                        <div class="separator"></div>
                        <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
                    </div>
                    <div className="h-[500px] w-full font-[poppins] ">
                        <div class="flex justify-around items-center text-center  shadow-lg  mx-3 mb-7 ">
                            <div className='flex flex-col items-center bg-white'>
                                <p className='text-xl font-[poppins]'>Likes</p>
                                <button id="button" class="group h-[55px] w-[100px] rounded-2xl bg-red-300 border-none shadow text-white cursor-pointer flex justify-between items-center overflow-hidden transition-all ">
                                    <div class="relative  bg-opacity-20 text-white flex justify-center items-center transition-all">
                                        <AiFillLike className='text-4xl text-black cursor-pointer hover:text-[#ff3131] active:scale-150 transition-all duration-200 ' />
                                    </div>
                                    <p class="px-5 py-1 text-2xl text-[#fff]">1</p>
                                </button>
                            </div>
                            <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                                <div class="flex flex-wrap -mx-3 mb-1">
                                    <h2 class="px-4 pt-2 pb-2 text-gray-800 text-lg ">Add a new comment</h2>
                                    <div class="w-full md:w-full px-3 mb-3 mt-2 ">
                                        <textarea class="bg-gray-100 rounded leading-normal resize-none w-full h-20 py-2 px-3 font-[poppins] placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
                                    </div>
                                    <div class="w-full md:w-full flex items-start md:w-full px-3 mb-4">
                                        <div class="-mr-1">
                                            <input type='submit' class="bg-white text-gray-700 font-[poppins] py-1 px-4 border border-[#ff3131] rounded-lg tracking-wide mr-1 hover:bg-[#ff3131] transition-all duration-300 hover:text-[#fff]" value='Post Comment' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <section class=" relative flex flex-col h-[59%] !w-full  antialiased bg-white  ">
                            <h1 className='px-5'>Comments</h1>
                            <div class="comment w-full bg-[#ff3131] flex flex-col gap-2 h-full overflow-auto scroll-smooth items-start">
                                <div
                                    class="flex-col !w-[90%] mt-3 m-auto bg-white   sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                    <div class="flex flex-row md-10">
                                        <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                        <div class="flex-col mt-1">
                                            <div class="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                                                <span class="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                            </div>
                                            <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Very cool! I'll have
                                                to learn more about Tailwind.
                                            </div>
                                        </div>                                    </div>
                                </div>
                                <div
                                    class="flex-col !w-[90%] mt-3 m-auto bg-white   sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                    <div class="flex flex-row md-10">
                                        <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                        <div class="flex-col mt-1">
                                            <div class="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                                                <span class="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                            </div>
                                            <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Very cool! I'll have
                                                to learn more about Tailwind.
                                            </div>
                                        </div>                                    </div>
                                </div>
                                <div
                                    class="flex-col !w-[90%] mt-3 m-auto bg-white   sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                    <div class="flex flex-row md-10">
                                        <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                        <div class="flex-col mt-1">
                                            <div class="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                                                <span class="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                            </div>
                                            <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Very cool! I'll have
                                                to learn more about Tailwind.
                                            </div>
                                        </div>                                    </div>
                                </div>
                                <div
                                    class="flex-col !w-[90%] mt-3 m-auto bg-white   sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                    <div class="flex flex-row md-10">
                                        <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                        <div class="flex-col mt-1">
                                            <div class="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                                                <span class="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                            </div>
                                            <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Very cool! I'll have
                                                to learn more about Tailwind.
                                            </div>
                                        </div>                                    </div>
                                </div>
                                <div
                                    class="flex-col !w-[90%] mt-3 m-auto bg-white   sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                    <div class="flex flex-row md-10">
                                        <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                        <div class="flex-col mt-1">
                                            <div class="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                                                <span class="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                            </div>
                                            <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Very cool! I'll have
                                                to learn more about Tailwind.
                                            </div>
                                        </div>                                    </div>
                                </div>
                                <div
                                    class="flex-col !w-[90%] mt-3 m-auto bg-white   sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                    <div class="flex flex-row md-10">
                                        <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                        <div class="flex-col mt-1">
                                            <div class="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                                                <span class="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                            </div>
                                            <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Very cool! I'll have
                                                to learn more about Tailwind.
                                            </div>
                                        </div>                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogDetails;
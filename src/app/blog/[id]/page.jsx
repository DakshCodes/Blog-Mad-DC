"use client"
import React, { useEffect, useState } from 'react'
const BlogDetails = () => {
    // const [blogDetails, setBlogDetails] = useState("")
    // const [isLiked, setIsLiked] = useState(false)
    // const [blogLikes, setBlogLikes] = useState(0)

    // const [commentText, setCommentText] = useState("")
    // const [comments, setComments] = useState([])
    // const id = location.pathname.split("/")[2]
    // const { user } = useContext(Context);


    // const router = useRouter();

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

    return (<>

    </>
    )
}

export default BlogDetails;
'use client'

// import { Context } from '@/components/Clients'
// import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import classes from './createBlog.module.css'

const CreateBlog = () => {
  const CLOUD_NAME = 'dylnk52kz'
  const UPLOAD_PRESET = 'my_blog_project_daksh'

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState("Nature")
  const [photo, setPhoto] = useState('')
  const [url, seturl] = useState('')
  // const { user } = useContext(Context)


  // if (status === 'loading') {
  //     return <p>Loading...</p>
  // }

  // if (status === 'unauthenticated') {
  //     return <p className={classes.accessDenied}>
  //         Access Denied
  //     </p>
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   uploadImage();

  //   if (!photo || !title || !category || !desc) {
  //     toast.error("All fields are required")
  //     return
  //   }
  //   try {
  //     console.log(url)
  //     const res = await fetch(`/api/customers/blog/create`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'POST',
  //       body: JSON.stringify({ title, desc, category, imageUrl: url, authorId: user?._id })
  //     })

  //     if (!res.ok) {
  //       throw new Error("Error occured")
  //     }

  //     const blog = await res.json()

  //     router.push(`/blog/${blog.newBlog._id}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const uploadImage = async () => {
  //   if (!photo) return;
  //   const data = new FormData()
  //   data.append("file", photo)
  //   data.append("upload_preset", "my-uploads")
  //   data.append("cloud_name", "dylnk52kz")
  //   fetch('https://api.cloudinary.com/v1_1/dylnk52kz/image/upload', {
  //     method: "POST",
  //     body: data
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       seturl(data.url);
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <div className={classes.container}>
  
    </div>
  )
}

export default CreateBlog
'use client'

import { Context } from '@/components/Clients'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/navigation'
// import { Context } from '@/components/Clients'
// import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineFileImage } from 'react-icons/ai'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import classes from './createBlog.css'

const CreateBlog = () => {
  const CLOUD_NAME = 'dylnk52kz'
  const UPLOAD_PRESET = 'my_blog_project_daksh'

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState("Tech")
  const [photo, setPhoto] = useState('')
  const [url, seturl] = useState('')
  const { user } = useContext(Context)

  const router = useRouter();


  // if (status === 'loading') {
  //     return <p>Loading...</p>
  // }

  // if (status === 'unauthenticated') {
  //     return <p className={classes.accessDenied}>
  //         Access Denied
  //     </p>
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    uploadImage();

    if (!photo || !title || !category || !desc) {
      toast.error("All fields are required")
      return
    }
    try {
      console.log(url)
      const res = await fetch("api/customers/blog/create", {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ title, desc, category, imageUrl: url, authorId: user?._id })
      })
      console.log("Here", res)
      if (res.status) {
        // const data = await res.json()
        toast.success("Successfully Created")
      } else {
        toast.error("Error occured while Creating")
        return
      }
      const blog = await res.json()

      router.push(`/blog/${blog.newBlog._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const uploadImage = async () => {
    if (!photo) return;
    const data = new FormData()
    data.append("file", photo)
    data.append("upload_preset", "my-uploads")
    data.append("cloud_name", "dylnk52kz")
    fetch('https://api.cloudinary.com/v1_1/dylnk52kz/image/upload', {
      method: "POST",
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        seturl(data.url);
      })
      .catch(err => console.log(err))
  }

  return (<>
    <Navbar />
    <div className='create-container'>
      <div class="container">
        <header>
          <h1>
            <a href="#">
              <img src="https://cdn.pixabay.com/photo/2016/10/10/01/49/leave-1727488_1280.png" alt="Authentic Collection" />
            </a>
          </h1>
        </header>
        <h1 class="text-center">Create-Blog</h1>
        <form class="registration-form" onSubmit={handleSubmit}>
          <label class="col-one-half">
            <span class="label-text">Title..</span>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label class="col-one-half">
            <span class="label-text">Description..</span>
            <input type="text" name="description" onChange={(e) => setDesc(e.target.value)} />
          </label>
          <div className="option">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Select">Select</option>
              <option value="Tech">Tech</option>
            </select>
          </div>
          <div className="uploads">
            <label htmlFor='image'>
              Upload Image <AiOutlineFileImage />
            </label>
            <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setPhoto(e.target.files[0])} />
          </div>
          <div class="text-center" id="submit">
            <button class="submit-btn">Create Blog</button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default CreateBlog
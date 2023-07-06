'use client'

import React from 'react'


const Edit = (ctx) => {
    // const CLOUD_NAME = 'doojo83ea'
    // const UPLOAD_PRESET = 'my_blog_project_webdevmania'
    // const [title, setTitle] = useState("")
    // const [desc, setDesc] = useState("")
    // const [category, setCategory] = useState("Nature")
    // const [photo, setPhoto] = useState("")
    // // const { data: session, status } = useSession()
    // const router = useRouter()

    // useEffect(() => {
    //     async function fetchBlog() {
    //         const res = await fetch(`/api/blog/${ctx.params.id}`)

    //         const blog = await res.json()

    //         setTitle(blog.title)
    //         setDesc(blog.desc)
    //         setCategory(blog.category)
    //     }
    //     fetchBlog()
    // }, [])

    // // if (status === 'loading') {
    // //     return <p>Loading...</p>
    // // }

    // // if (status === 'unauthenticated') {
    // //     return <p className={classes.accessDenied}>
    // //         Access Denied
    // //     </p>
    // // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     if(title === '' || category === '' || desc === ''){
    //         toast.error("All fields are required")
    //         return
    //     }

    //     try {
    //         let imageUrl = null
    //         if(photo){
    //             imageUrl = await uploadImage()
    //         }

    //         const body = {
    //             title, 
    //             desc, category
    //         }

    //         if(imageUrl != null){
    //             body.imageUrl = imageUrl
    //         }
            
    //         const res = await fetch(`/api/blog/${ctx.params.id}`, {
    //             headers: {
    //                 "Content-Type": 'application/json',
    //                 "Authorization": `Bearer ${session?.user?.accessToken}`
    //             },
    //             method: "PUT",
    //             body: JSON.stringify(body)
    //         })

    //         if(!res.ok){
    //             throw new Error("Error has occured")
    //         }

    //         const blog = await res.json()

    //         router.push(`/blog/${blog?._id}`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const uploadImage = async () => {
    //     if (!photo) return

    //     const formData = new FormData()

    //     formData.append("file", photo)
    //     formData.append("upload_preset", UPLOAD_PRESET)

    //     try {
    //         const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    //             method: "POST",
    //             body: formData
    //         })

    //         const data = await res.json()

    //         const imageUrl = data['secure_url']

    //         return imageUrl
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return (
        <></>
    )
}

export default Edit
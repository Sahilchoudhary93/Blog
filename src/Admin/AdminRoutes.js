import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import AddBlog from './AdminPages/AddBlog'
import BlogShow from './AdminPages/BlogShow'
import AdminBlogDetail from './AdminPages/AdminBlogDetail'
import MyAccount from './AdminPages/MyAccount'
import Firebase from '../Firebase'
import AdminBlogContext from './Context/AdminBlogContext'


const AdminRoutes = () => {
const[data,setdata]= useState(null)
const [loader,setloader]= useState(false)
const navigate=useNavigate()
useEffect(()=>
  {
    setloader(true)
    const users= JSON.parse(localStorage.getItem("Users"))
    if(!users) {
      alert("Unauthorised user")
window.history.replaceState(null,null,"/Login")
return navigate("/",{replace:true})
    }
    Firebase.child("Blogs").child(users).on('value',function(snap){
   if(snap.val()) return setdata(snap.val())
    else return setdata(null)
    })
    setloader(false)

     },[])

  return (
    <AdminBlogContext.Provider value={{"fetchblogs":data, "loader":loader}}>
    <Outlet/>
  </AdminBlogContext.Provider>
  )
}

export default AdminRoutes
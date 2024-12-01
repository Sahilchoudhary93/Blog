import React, { Suspense, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '../AdminComp/AdminHeader'
import AdminFooter from '../AdminComp/AdminFooter'
import AdminBlogContext from '../Context/AdminBlogContext'
const AdminBlogDetailComp= React.lazy(()=>import('../AdminComp/AdminBlogDetailComp'))

const AdminBlogDetail = () => {
const navigate=useNavigate()
const [data,setdata]=useState(null)
const {fetchblogs}=useContext(AdminBlogContext)
const [current,setcurrent]= useState(JSON.parse(localStorage.getItem("CurrentBlog")))
const[nextblog,setnextblog]=useState(null)
const[previousblog,setpreviousblog]=useState(null)
useEffect(()=>{
  if(fetchblogs){
    if(!current) return navigate("/Blogs")
     if(!fetchblogs[current]) return navigate("/Blogs")
      const result=Object.keys(fetchblogs).filter((key)=>key===current)
    if(result.length===0) return navigate("/Blogs")
      setdata(fetchblogs[current])
  }
  const array=Object.keys(fetchblogs)
  let currentblogindex=null
  for(let i=0;i<array.length;i++){
    if(array[i]===current){
      currentblogindex=i
break;
    }
  }
  const next= currentblogindex+1
  const previous= currentblogindex-1
  if(next<array.length)  setnextblog(array[next])
    if(previous>-1) setpreviousblog(array[previous])
      else setpreviousblog(null)
},[fetchblogs,current])  
return (
    <div>
        <AdminHeader blog="active"/>
        <Suspense  fallback={<div className='preloaders'><div className='loaders'></div></div>}>
        <AdminBlogDetailComp fun={setcurrent} next={nextblog} previous={previousblog} alldata={fetchblogs} current={current} data={data}/>
        </Suspense>
        <AdminFooter/>
    </div>
  )
}

export default AdminBlogDetail

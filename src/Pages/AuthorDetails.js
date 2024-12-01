import React, { Suspense, useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import UseContext from './Context/UserContext'
import { useNavigate } from 'react-router-dom'
import Firebase from '../Firebase'
const AuthorDetailsComp= React.lazy(()=>import('../Components/AuthorComponent/AuthorDetailsComp'))

const AuthorDetails = () => {
    const{users}=useContext(UseContext)
const[data,setdata]=useState(null)
const[blogs,setblogs]=useState({})
const[category,setcategory]=useState([])
const navigate= useNavigate()
useEffect(()=>{
    if(users){
        const author=JSON.parse(localStorage.getItem("Authors"))

        if(!users) return navigate("/Authors")
            Firebase.child("Blogs").child(author).on("value",function(snap){
        if(snap.val()) return setblogs(snap.val())
            else return setblogs({})
        })
    }
},[])
useEffect(()=>{
    if(blogs){
        const response= Object.keys(blogs).map((key)=>blogs[key].category)
        const object= new Set (response)
        const array=[...object]
        const resultingarray=Object.keys(blogs)
        let finalarray=[]
        for (let i = 0; i < array.length; i++) {
            const newcate = array[i];
            let count=0
for (let j = 0; j < resultingarray.length; j++) {
    if(blogs[resultingarray[j]].Category===newcate){
        count++
    }
}   
const objects={
    Category:newcate,
    Times:count
}
finalarray.push(objects)
 }
 setcategory(finalarray);
    }
    else setcategory([])
},[])
    return (
        <div>
            <Header author='active' />
            <Suspense fallback={<div className='preloaders'><div className='loaders'></div></div>}>
                <AuthorDetailsComp category={category} data={data} blogs={blogs}/>
                </Suspense>
            <Footer />
        </div>
    )
}

export default AuthorDetails
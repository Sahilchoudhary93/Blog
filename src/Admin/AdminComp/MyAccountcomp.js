import React, { useRef, useState } from 'react'
import { replace, useNavigate } from 'react-router-dom'
import Firebase, { storage } from '../../Firebase'

const MyAccountcomp = (props) => {
const img= useRef()
  const [image,setimage]= useState(null)
const [btndis,setbtndis] = useState(false)
const navigate= useNavigate()

const upload=(event)=>{
  const file= event.target.files[0]

if(!file) return alert("No Iimage is selected")
    const ext= file.type.split("/")
if(ext[0]!=="image") return alert("Only Images can be uploaded")
    if(ext[1]=="png" ||ext[1]=="jpg" ||ext[1]=="jpeg" ||ext[1]=="PNG" ||ext[1]=="jfif") 
        {
            return setimage(file)
        }
        return alert("Only png,jpg,jpeg & jfif file types are supported")
}
const submit= async(e)=>{
  try{
e.preventDefault()
setbtndis(true)
if(!image) return alert("Uplaod Profile Image first.")
  const user= JSON.parse(localStorage.getItem("Users"))
if(!user)
   { alert("Unauthorized user")
  window.history.replaceState(null, null, "/Login")
return navigate("/",{replace:true})}
  
const fileref= storage.child(Date.now()+image.name)
await fileref.put(image)
const url=await fileref.getDownloadURL()
const path= fileref.fullPath
const object={url,path} 
  
Firebase.child("Users").child(user).update({ProfileImage:object})
alert("User Updated successfully")
}

  catch(error){
console.log(error)
alert("Something Went wrong")
  }
  finally{
setbtndis(false)
setimage({})
  }
}
console.log(props.data)
  return (
    <div>
      <div className="author-wrap">
    <div className="container">
     {
      props.user.ProfileImage? <div className="author-box">
      <div className="author-img">
      <img alt="Image" src={props?.user?.ProfileImage?props.user?.ProfileImage.url:"assets/img/author/single-author.jpg"} />
      </div>
      <div className="author-info">
        <h4>{props?.user?.Name}</h4>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or ran domised words which don't look even slightly
          believable.</p>
        <div className="author-profile">
          <ul className="social-profile list-style">
            <li><a href="https://www.fb.com/" target="_blank"><i className="ri-facebook-fill" /></a></li>
            <li><a href="https://www.twitter.com/" target="_blank"><i className="ri-twitter-fill" /></a>
            </li>
            <li><a href="https://www.instagram.com/" target="_blank"><i className="ri-instagram-line" /></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-fill" /></a>
            </li>
          </ul>
    
        </div>
      </div>
    </div>: <div className="author-box">
        <div className="author-img">
        <div className="sidebar">
                             <div className="author-img">
      <button onClick={()=>img.current.click()} className='btn btn-warning'>Upload</button>
      <img alt="Image" src={image?URL.createObjectURL(image):'assets/img/newsletter-bg.webp'}  />
      <input type='file' hidden onChange={upload} ref={img} accept='image/*'/>
      <button onClick={submit} className='btn btn-primary'>Submit</button>
      </div>
      
      {/* <div className="author-info">
        <h4>Scarlett Emily</h4>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or ran domised words which don't look even slightly
          believable.</p>
          </div> */}

            </div>
            </div>


    </div>
      }      </div>
      <div className="popular-news-three ptb-100">
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-8">
          <div className="section-title-two mb-40">
            <h2>Posts</h2>
          </div>
{/* {
  props?.data?.fetchblogs?  
         <div className="popular-news-wrap">
  <div className="news-card-five">
    <div className="news-card-img">
      <img src={props?.data?.fetchblogs?.Image?props?.data?.fetchblogs?.Image.url:""} alt="Image" />
      <a className="news-cat">{props?.data?.fetchblogs?props?.data?.fetchblogs?.Category:""}</a>
    </div>
    <div className="news-card-info">
      <h3><a >{props?.data?.fetchblogs?.Title?props?.data?.fetchblogs?.Title:""}</a></h3>
      {/* <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet conse ctet
        fringilla purus leo dignissim congue. Mauris elementum accumsan.</p> */}
      <ul className="news-metainfo list-style">
        <li className="author">
        </li>
        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 03,
            2024</a></li>
        <li><i className="fi fi-rr-user" />{props?.data?.fetchblogs?.Author?props?.data?.fetchblogs?.Author:""}</li>
      </ul>
    </div>
  </div>
  </div>
  :<h1>No Blogs Available</h1>

 
         
         
         
         
         
         
         
         
         
         
         
          <ul className="page-nav list-style text-center mt-5">
            <li><a href="author.html"><i className="flaticon-arrow-left" /></a></li>
            <li><a className="active" href="author.html">01</a></li>
            <li><a href="author.html">02</a></li>
            <li><a href="author.html">03</a></li>
            <li><a href="author.html"><i className="flaticon-arrow-right" /></a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <div className="sidebar">
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Explore Topics</h3>
              <ul className="category-widget list-style">
                <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Celebration <span>(6)</span></a></li>
                <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Culture<span>(3)</span></a></li>
                <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Fashion<span>(2)</span></a></li>
                <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Inspiration<span>(8)</span></a></li>
                <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Lifestyle<span>(6)</span></a></li>
                <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Politics<span>(2)</span></a></li>
                <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Trending<span>(4)</span></a></li>
              </ul>
            </div>
            <div className="sidebar-widget-two">
              <div className="contact-widget">
                <img src="assets/img/contact-bg.svg" alt="Image" className="contact-shape" />
                <a href="index.html" className="logo">
                  <img className="logo-light" src="assets/img/logo.webp" alt="Image" />
                  <img className="logo-dark" src="assets/img/logo-white.webp" alt="Image" />
                </a>
                <p>Mauris mattis auctor cursus. Phasellus iso tellus tellus, imperdiet ut imperdiet eu,
                  noiaculis a sem Donec vehicula luctus nunc in laoreet Aliquam</p>
                <ul className="social-profile list-style">
                  <li><a href="https://www.fb.com/" target="_blank"><i className="flaticon-facebook-1" /></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="flaticon-twitter-1" /></a></li>
                  <li><a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram-2" /></a></li>
                  <li><a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin" /></a></li>
                </ul>
              </div>
            </div>
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Recommended</h3>
              <div className="pp-post-wrap-two">
                <div className="news-card-one">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-thumb-4.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Bernie Nonummy Pelopai Iatis Eum Litora</a>
                    </h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                          22, 2024</a></li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-one">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-thumb-5.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">How Youth Viral Diseases May The Year
                        2023</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                          23, 2024</a></li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-one">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-thumb-6.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Man Wearing Black Pullover Hoodie To
                        Smoke</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                          14, 2024</a></li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-one">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-thumb-7.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">First Prototype Flight Using Kinetic Launch
                        System</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                          07, 2024</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default MyAccountcomp
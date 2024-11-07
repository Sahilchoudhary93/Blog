import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Firebase,{auth} from '../Firebase'
const Signup = () => {
  const[Obj,SetObj]= useState({})
const [btn,disbtn]= useState(false)
  const d= new Date()
  const date= `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
  function NameChange(event){
    const name = event.target.value.replace(/[^a-zA-Z\s]/g, '');
    SetObj({...Obj,"Name":name});
  }
  function set(event){
    SetObj({...Obj,[event.target.name]:event.target.value,"Date":date})
  }
  function EmailCheck(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
}
async function save(e){
try {
  e.preventDefault()
  disbtn(true)
if(!Obj.Name || !Obj.Email || !Obj.Password ||!Obj.ConfirmPassword ) return alert("Field is Empty")
  const response= EmailCheck(Obj.Email)
if(!response) return alert("Email is not valid")
  if(Obj.Password!==Obj.ConfirmPassword) return alert("Password not matched")

const object={
  Name: Obj.Name,
  Email: Obj.Email
}
    const result= await auth.createUserWithEmailAndPassword(Obj.Email, Obj.Password)
SetObj({})
  Firebase.child("Users").child(result.user.uid).set(object,err=>{
if(err) return alert("Something went wrong.")
  else{
alert("Account created successfully")
}
})

} catch (error) {
  return alert("This Email is already exist.")
  console.log(error)
}
finally{
  disbtn(false)
}

}

  return (
    <div className="login-wrap">
  <div className="login-bg">
    <a  className="navbar-brand">
      <img className="logo-light" src="assets/img/logo-white.webp" alt="Image" />
      <img className="logo-dark" src="assets/img/logo-white.webp" alt="Image" />
    </a>
  </div>
  <div className="login-content">
    <Link to={'/'} className="link-one"><i className="ri-arrow-left-s-line" />Back</Link>
    <div className="login-form">
      <h3>Account SignUp</h3>
      <div className="alt-login">
        <a style={{width:"100%"}} href="https://www.gmail.com/"><img src="assets/img/icons/google.svg" alt="Image" />Login With
          Google</a>    
      </div>
      <div className="text-center">
        <span className="or-text">OR</span>
      </div>
      <form action="#">
        <div className="form-group">
          <input type="text" value={Obj.Name?Obj.Name:""} onChange={NameChange}  placeholder="Full Name" />
        </div>
        <div className="form-group">
          <input type="email" onChange={set} value={Obj.Email?Obj.Email:""} name='Email' placeholder="Email Address" />
        </div>
        <div className="form-group">
          <input type="password" onChange={set} value={Obj.Password?Obj.Password:""} name='Password' placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="password" onChange={set} value={Obj.ConfirmPassword?Obj.ConfirmPassword:""} name='ConfirmPassword' placeholder="Confirm Password" />
        </div>
        <button type="submit" disabled={btn} className="btn-two w-100 d-block" onClick={save}> Create Account</button>
        <p className="login-text">Already have an account?<a href="login.html">Login</a></p>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Signup
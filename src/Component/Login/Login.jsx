import React from 'react'
import photo from "../../image/gaming.ebaf2ffc84f4451d.jpg"
import logo from "../../image/logo.png"
import Styles from "./Login.module.scss"
export default function Login() {
  return (
    <>
    <div className='row d-flex text-muted'>
      <div className='col-md-6 '>
        <div className='image'>
          <img className='w-100' src={photo} alt="" />
        </div>
      </div>
      <div className={`col-md-6 ${Styles.bgdata}`}>
        <div className='data text-center'>
          <img className='w-25 ' src={logo} alt="" />
          <h4>Log in to GameOver</h4>
         <form className='my-4'>
         <input className=' form-control  w-75 m-auto my-3 py-2 ' type="text" placeholder='Email' name='email'/>
          <input className=' form-control w-75 m-auto my-3 py-2' type="password" placeholder='Password' name='password'/>
          <button className='bg-dark form-control w-75 m-auto py-2 text-white'>Login</button>
         </form>
          
        </div>

      </div>
    </div>
    </>
  )
}

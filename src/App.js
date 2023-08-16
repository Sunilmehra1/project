// import React, { useEffect } from 'react'
import {BrowserRouter , Route , Routes,} from "react-router-dom"
// import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import Dashboard from './component/Dashboard'
import Home from './component/Home'
import Page from "./component/Page"
import { useEffect } from "react"
import { auth } from "./component/Firebase"
import { useState } from "react"
// import Login from './component/login'

const App = () => {
  const[userName , setuserName ]=useState("")
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
if (user) {
  setuserName(user.displayName)
}else setuserName("")

console.log(user)

console.log(user)
  })
} ,[])


  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/page" element ={<Page/>}/>
<Route  path='/'  element ={<Home/>}/>
  <Route  path='/sign' element = {<Login/>}/>
  <Route path='/lo' element={<Signup/>}/>
  <Route path='/dashboard' element={<Dashboard name = {userName} />}/>
</Routes>


</BrowserRouter>

    </div>
  )
}

export default App
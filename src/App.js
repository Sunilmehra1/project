import React, { useEffect } from 'react'
import {BrowserRouter , Route , Routes, useNavigate} from "react-router-dom"
// import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import Dashboard from './component/Dashboard'
// import Login from './component/login'

const App = () => {



  return (
    <div>
<BrowserRouter>
<Routes>

  <Route  path='/' element = {<Login/>}/>
  <Route path='/lo' element={<Signup/>}/>
  <Route path='/dashboard' element={<Dashboard />}/>
</Routes>


</BrowserRouter>

    </div>
  )
}

export default App
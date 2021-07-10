import React from 'react'

import {BrowserRouter,Route} from "react-router-dom"
import ContactUs from './component/ContactUs'

import Home from './component/Home'
import LogIn from './component/LogIn'
import Youth from "./component/Youth"

function App() {
  return (
  
   <BrowserRouter>
    
      <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactUs} />
        <Route path="/login" component={LogIn} />
        <Route path="/youth" component={Youth} />
    </BrowserRouter>
  )
}

export default App

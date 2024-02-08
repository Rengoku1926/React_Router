import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './assets/Home/Home.jsx'
import About from './assets/About/About.jsx'
import Contact from './assets/Contact/Contact.jsx'
import User from './assets/User/User.jsx'
import Github ,{ githubInfoLoader} from './assets/Github/Github.jsx'


const router = createBrowserRouter(
    // path: '/',
    // element: <Layout/>,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home/>
    //   },
    //   {
    //     path: "/about",
    //     element: <About/>
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact/>
    //   },
    //   {
    //     path: "/github",
        
    //   }
    // ]
    createRoutesFromElements(
      <Route path ='/' element={<Layout/>}>
        <Route path ='' element={<Home/>} />
        <Route path ='about' element={<About/>} />
        <Route path ='contact' element={<Contact/>} />
        <Route path ='user/:userId' element={<User/>} />
        <Route loader={githubInfoLoader} path ='github' element={<Github/>} />


      </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
     </Route>
    </>
  )
);



function App() {
 

  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App

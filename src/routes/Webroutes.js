import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Dashboard from "../components/Dashboard"
import Demopage from "../components/Demopage"
import WatchPage from "../components/WatchPage"
import Parent from "../components/Parent"
import VideoSearch from "../components/VideoSearch"
import Login from "../components/Login"
import Register from "../components/Register"
import Auth from "../utils/Auth"



const Webroutes = ()=>{
    return(<>
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Auth><Dashboard /></Auth>} />      
            <Route path="/demo" element={<Auth><Demopage /></Auth>} />        
            <Route path="/watch" element={<Auth><WatchPage /></Auth>} />  
            <Route path="/callback" element={<Auth><Parent /></Auth>} />  
            <Route path="/search" element={<Auth><VideoSearch /></Auth>} />  
            <Route path="/login" element={<Login />} />  
            <Route path="/register" element={<Register />} />  
             </Route>
        </Routes>
    </Router>
    </>)
}
export default Webroutes
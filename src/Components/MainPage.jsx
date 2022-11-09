import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = ()=>{
return(
    <>
    <div className='Navbar'>
    <input style = {{"width":150,borderRadius:10}}type = "text" placeholder = "search"/>
    <Link className='link' to = "Main">Main</Link>
    <Link className = "link" to = "/">Login</Link>
    <Link className = "link" to = "Language">Language</Link>
    <Link className = "link" to = "Genre">Genre</Link>
   <p style = {{backgroundColor:"aqua"}}><hr/></p> 
   <div style = {{backgroundColor:"aqua"}}><hr/></div>
</div> 

    </>
)
}
export { MainPage }
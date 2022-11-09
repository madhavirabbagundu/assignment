import React from 'react'
import { Link } from 'react-router-dom';
import './Main.css'

const Main = ()=>{
    const [data,setData] = React.useState([])
    const [images,setImages] = React.useState(false)
    const [images1,setImages1] = React.useState([])

    React.useEffect(()=>{
        fetch(`http://localhost:3000/movies`)
        .then((res)=>res.json())
        .then((json)=>setData(json))
    },[])

    React.useEffect(()=>{
        fetch(`http://localhost:3000/images`)
        .then((res)=>res.json())
        .then((json)=>setImages1(json))
    },[])
    console.log(images)
return(
    <>
    {/* <h1>this is the main page</h1> */}
    <div className='Main'>
    {data.map((item)=>(
        <div className='MainDiv'>
            <div>
           <Link to = {`/cart/${item.id}`}><img className = "Image" src = {item.image}/></Link>
            <h4>{item.title}</h4>
            <h5 style = {{color:'blue'}}>{item.name}</h5>
            {/* <p>{item.info}</p> */}
            </div>
            </div>
    ))}

</div>

<div> 
    
    {/* <Link className='seemore' to = "Main">see more</Link> */}
   {
   images?<div className='hideImages'>
    {
        images1.map((item1)=>(
            <img className='Image' src = {item1.img}/>
        ))
    }
   </div>:null
   }
   <button onClick = {()=>setImages(!images)} className = "seemore">See More</button>
 </div>
   
    

 
    </>
)
}
export { Main }
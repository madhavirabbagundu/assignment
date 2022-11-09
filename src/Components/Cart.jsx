import React from 'react'
import { useParams } from 'react-router-dom'
// import './Cart.css'
// import { CartInfo } from './CartInfo';

const Cart = ()=>{
    const { itemId } = useParams();
    console.log(itemId)
    const [Result,setResult] = React.useState({});
    const [data,setData] = React.useState([])

console.log(Result)
    React.useEffect(()=>{
        fetch(`https://newmoviess.herokuapp.com/Movies/${itemId}`)
        .then((res)=>res.json())
        .then((json)=>{
            setResult(json)
        })
    },[itemId])

    React.useEffect(()=>{
        fetch(`https://newmoviess.herokuapp.com/images`)
        .then((res)=>res.json())
        .then((json)=>{
            setData(json)
        })
    },[])
return(
    <>
    {/* <h1> this is the cart page</h1> */}
    <div className='Main1'>
    <div className='cartItems'>
        <div>
       <img className = "Image" src =  {
            Result.image
        }/>
        </div>
        <div>
        <h2>{Result.title}</h2>
        <p>Action</p>
        <p>Duration:1:50hr</p>
        <button style = {{backgroundColor:'green' ,height:30,width:150,color:'white',border:"none",borderRadius:30}}>Watch now</button>
        <button style = {{color:'green' ,height:30,width:150,marginLeft:20}}>Watch Later</button>
        </div>
        {/* <CartInfo /> */}
</div>
    <div className='para'>{Result.info}</div> 
    <h5 style = {{color:'skyblue'}}>Similar images</h5>
    <div className='hideImages'>
    {
        data.map((item)=>(
            <img className='Image' src = {item.img}/>

        ))
    }
    </div>


    </div>
    </>
)
}
export { Cart }
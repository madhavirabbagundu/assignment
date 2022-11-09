import React from 'react'


const CartInfo =()=>{
const [Info,setInfo] = React.useState([])
React.useEffect(()=>{
    fetch(`http://localhost:3000/movies`)
    .then((res)=>res.json())
    .then((res)=>setInfo(res))
},[])
console.log(Info)
return(
    <>
    <div>
    {Info.map((item)=>(
        <div>{item.info}</div>
    ))}
    </div>
    </>
)
}
export { CartInfo }
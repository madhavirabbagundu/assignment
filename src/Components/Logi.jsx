import React from 'react'

const Logi = ()=>{
    const [data,setData] = React.useState({
        name : "",
        number : ""

    })

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
     
    }

    const handleSubmit = (e)=>{
        console.log(e)
    e.preventDefault();
    

    }
    console.log(data)
    const {name,number} = data;
return(

    <>
    <form onSubmit={handleSubmit}>
    <input type = "text" 
    onChange={handleChange}
    name = "name"
    value= {name}
    placeholder = "enter your name"/>

    <input type = "number"
    onChange={handleChange}
    name = "number"
    value = {number}
    placeholder = "enter your phone number"/>

    <input type = "submit" value = "submit"/>
    </form>
    </>
)
}
export { Logi }
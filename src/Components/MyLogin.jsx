import React from 'react'

const MyLogin = () =>{
    const [page,setPage] = React.useState({
        email:"",
        number:""
    })

    const handleChanged = (e)=>{
        const{name,value} = e.target;
        setPage({...page,[name]:value})
    }
    const handleSubmitted =(e)=>{
        console.log(e)
      e.preventDefault();
      console.log(email,number)
      alert("tihs is email"+email+"this is "+number)
    }
    const {email,number} = page
    return(
        <>
        <div>this is the my llogin page</div>
        <form onSubmit = {handleSubmitted}>
            <input type = "email"
            name = "email"
            value = {email}
            placeholder='enter you email address'
            onChange={handleChanged}
            />
            <input type = "number"
            name = "number"
            placeholder='Enter your number'
            value = {number}
            onChange = {handleChanged}
            />

            <button type = "submit" value = "submit">submit</button>
        </form>

        <div>

        </div>
        </>
    )

}
export { MyLogin }
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = ()=>{
    const [LoginData ,setLoginData] = React.useState({
        email:"",
        password:""
    }) 
 const navigate = useNavigate();
    // if(LoginData.token){
    //     navigate("Main")
    // }




const handleChange = (e)=>{
    const {name,value} = e.target;
    setLoginData({...LoginData, [name]:value})
}
const handleSubmit = (e)=>{
    e.preventDefault();
    if(email.includes("@") && password.length===4){
        // Main(true);
        alert("login success")
        navigate('Main')
    }else{
        alert("Enter correct details")
    }
    // console.log(LoginData)ass


}
const {email,password} = LoginData

    return(
        <>
        {/* <h1>This is the login page</h1> */}
        <div className='loginPage'>
            <h2>Sign in to your Account</h2>
            <form onSubmit = {handleSubmit}>
            <input type = "email"
             className='InputBox'
             name = "email"
             value = {email}
             required
            placeholder = "Enter Email"
            onChange = {handleChange}
            /><br/>
            <input type = "password"
            className='InputBox'
            value = {password}
            name = "password"
            required
            onChange = {handleChange}
            placeholder = "Password"/><br/>
            
            <input type = "submit"  className='Login_Button'  value = "Login"/>
            {/* <Link to = {'Main'}>Main</Link> */}
            </form>
        </div>

        </>
    )
}
export { Login }
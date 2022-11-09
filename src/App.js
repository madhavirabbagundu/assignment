import React from 'react';
import './App.css';
import { Login }  from './Components/LoginPage'
import {Routes,Route} from 'react-router-dom'
import { MainPage } from './Components/MainPage';
import { Main } from './Components/Main'
import { Cart } from './Components/Cart'
import { Language }from './Components/Language'
import { Genre } from './Components/Genre'
// import { CartInfo } from './Components/CartInfo';
// import { LoginPage } from './Components/LoginPage'

function App() {
  return (
    <div className="App">
      {/* <h1>this is the assignment</h1> */}
      <MainPage />
      <Routes>
      <Route path = "Main" element = {<Main/>}>Main</Route>
      <Route path = "/" element = {<Login/>}>Login</Route>
      <Route path = "/cart/:itemId" element = {<Cart/>}></Route>
      <Route path = "Language" element = {<Language/>}></Route>
       <Route path = "Genre" element = {<Genre />}>Genre</Route>
      
       </Routes>
      {/* <Login /> */}
      {/* <CartInfo /> */}
    </div>
  );
}

export default App;

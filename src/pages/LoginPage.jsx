import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {loginUser} from "../redux/modules/userSlice"
import {useDispatch} from "react-redux"

const LoginPage = () => { 
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigater = useNavigate();
    const dispatch = useDispatch()

    const loginAxios = () => {
       const data = {
        email ,
        password ,
       }

        axios.get("http://localhost:5001/login/true",data).then(response=>{
            console.log(response)
            sessionStorage.setItem("key", response.data.cookie)
            dispatch(loginUser(
             {
                email: response.data.email,
                nickname: response.data.nickname,
             }
            ))
            navigater("/");
        }).catch(error=> {
            alert(error);
           })  
    }

    const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
      }
    const onSubmit = (event) => {
        event.preventDefault();
    

    }

   return (
    <div style={{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100vh"
    }}>
    <div>
        <form onSubmit={onSubmit} style={{display:"flex", flexDirection:"column"}}>
            <input 
            name="email"
            type="email" 
            placeholder="Email" 
            required 
            value={email}
            onChange={onEmailHandler}
            /> 
            <br/>
            <input 
            name="password"            
            type="password" 
            placeholder="Password" 
            required
            value={password}
            onChange={onPasswordHandler}
            /> 
            <br/>
            <button type="submit" onClick={loginAxios}>로그인하기</button>
        </form>
            <br/>
            <button style={{padding:"0 3.2rem "}}> 회원가입</button>
    </div>
    </div>
   )
}

export default LoginPage;
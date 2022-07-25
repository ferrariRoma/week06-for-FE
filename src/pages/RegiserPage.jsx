import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [nickName, setNickName] = React.useState("");
    const navigater = useNavigate();

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
      }
      const onPasswordHandler = (event) => {
          setPassword(event.currentTarget.value);
      }
      const onNicNameHandler = (event) => {
        setNickName(event.currentTarget.value);
      }
      const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
      }  
      const registAxios = () => {
        const data = {
         email ,
         password ,
         nickName ,
        }
 
         axios.post("http://localhost:5001/signup",data).then(response=>{
             console.log(response)
         }).catch(error=> {
          alert(error);
         })      
        }


      const onSubmitHandler = (event) => {
        event.preventDefault();
        if (password ===confirmPassword) {
            console.log(email, password, nickName)
            alert("가입완료")
            navigater("/regist");
          } else {
            alert("비밀번호가 일치하지 않습니다.")
        }
      };
    

    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}>
            <form 
            onSubmit={onSubmitHandler}
            style={{display:"flex", flexDirection:"column"}}>
                <input type="email" value={email} placeholder="Email" onChange={onEmailHandler} required />
                <br/>
                <input type="text" value={nickName} placeholder="Nickname" onChange={onNicNameHandler} required/>
                <br/>
                <input type="password" value={password} placeholder="Password" onChange={onPasswordHandler} required/>
                <br/>
                <input type="password" value={confirmPassword} placeholder="ConfirmPassword" onChange={onConfirmPasswordHandler} required/>
                <br/>
                <button type="submit" onClick={registAxios}>join F.B.I</button>
            </form>
        </div>
       
    )
}


export default RegisterPage;
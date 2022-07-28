import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, SignupDiv, Btnset} from "../components/styled";
import instance from "../axiosConfig";

const RegisterPage = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [nickname, setNickname] = React.useState("");
    
    
    const [emailError, setEmailError] = React.useState(true);
    const [passwordError, setPasswordError] = React.useState(true);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(true);
    const [emailCheckError, setEmailCheckError] = React.useState(true);
    const [nickCheckError, setNickCheckError] = React.useState(true);



    const navigater = useNavigate();

    const onEmailHandler = (event) => {
      const userIdRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
      if ((!event.currentTarget.value || (userIdRegex.test(event.currentTarget.value)))) 
        setEmailError(false);
      else setEmailError(true);
        setEmail(event.currentTarget.value);      
      }

      const onPasswordHandler = (event) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!event.currentTarget.value || (passwordRegex.test(event.currentTarget.value)))) setPasswordError(false);
        else setPasswordError(true);
        if (!confirmPassword || event.currentTarget.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(event.currentTarget.value);
      };

      const onNicNameHandler = (event) => {
        setNickname(event.currentTarget.value);
      }
      const onConfirmPasswordHandler = (event) => {
        if (password === event.currentTarget.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(event.currentTarget.value);
      }  

      const registAxios = () => {
        const data = {
         email ,
         password ,
         nickname ,
        }
 
        instance.post("/user/signup",data).then(response=>{
             console.log(response)
         }).catch(error=> {
          alert(error);
         })      
        }

      const checkEmail = () => {
        instance.post(`/user/email/{email}`).then(response=>{
          //email 중복이 없는 경우
          setEmailCheckError(false);
        }).catch(error=> {
          //중복이 있는 경우
          setEmailCheckError(true);
          alert(error);
         })      
        }

      const checkNickname = () => {
        instance.post(`/user/nickname/{nickname}`).then(response=>{
          setNickCheckError(false);
        }).catch(error=> {
          alert(error);
          setNickCheckError(true);
         })      
        }

      const onSubmitHandler = (event) => {
        event.preventDefault();
        if (emailError===false&& confirmPasswordError===false&&passwordError===false&&emailCheckError===false&&nickCheckError===false) 
          {alert("가입완료")
          navigater("/login")}
          else 
          alert("다시 확인해주세요.")
      };
    

    return (
        <SignupDiv>
            <form 
            onSubmit={onSubmitHandler}
            style={{display:"flex", flexDirection:"column"}}>
             <h2>Signup</h2>
              <Row>
               <label> 아이디</label>
               <input type="text" value={email} onChange={onEmailHandler} required />
               {/* <button onClick={checkEmail}>중복체크</button> */}
              </Row>
              <span>{emailError && <div class="invalid-input"> 아이디는 이메일로 입력해주세요. </div>}</span>
              <Row>
               <label> 닉네임</label>
               <input type="text" value={nickname}  onChange={onNicNameHandler} required/>
               {/* <button onClick={checkNickname}>중복체크</button> */}
              </Row>
              <Row>
               <label> 비밀번호</label>
               <input type="password" value={password}  onChange={onPasswordHandler} required/>
              </Row>
              <span>{passwordError && <div class="invalid-input"> 비밀번호는 문자와 숫자를 포함한 최소 8자리로 입력해주세요.</div>}</span>
              <Row>
               <label> 비밀번호 확인</label>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} required/>
              </Row> 
              <span>{confirmPasswordError && <div class="invalid-input">비밀번호를 확인해주세요.</div>}</span> 
              <br/>
               <Btnset>
                <button type="submit" onClick={registAxios}>Join</button>
                <button onClick={()=>navigater('/login')}>취소</button>
               </Btnset>
            </form>
        </SignupDiv>
       
    )
}


export default RegisterPage;



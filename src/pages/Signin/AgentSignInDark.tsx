import React from 'react'
import styled from '@emotion/styled'
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import {FcGoogle} from "react-icons/fc"
import {MdVisibilityOff} from "react-icons/md"
import {MdVisibility} from "react-icons/md"

const Container = styled.div`
height: 100vh;
display: flex;
box-sizing: border-box;
`
const Wrapper = styled.div`
background-color: #151515;
width: 100%;

h2{
    font-size: 34px;
    font-weight: bold;
    color: #084A5F;
    /* padding-top: 20px; */
    margin-left: 30px;

    span{
        color: #FFCB05;
    }
}
@media (min-width: 320px) and (max-width: 767px){
    h2{
        font-size: 20px;
        margin-left: 15px;
        /* padding-top: 15px; */
        font-weight: bold;
    }
}
`
const Wrapper2 = styled.div`
background-color: #6a5acd;
width: 100%;
@media (min-width: 320px) and (max-width: 1023px){
    display: none;
}
`
const UserInput = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #1D1E24;
margin-bottom: 20px;
border-radius: 10px;
padding:0 20px;
gap: 15px;

input{
    background-color: transparent;
    width: 100%;
    border-radius: 20px;
    padding-left: 5px;
    height: 60px;
    outline: #121212;
    color: #ffffffcf;
    font-size: 20px;  
    border: none;

    ::placeholder{
        font-size: 18px;
    }
}
@media (min-width: 320px) and (max-width: 767px){
    margin: 15px 15px;
    input{
        height: 50px;
        width: 90%;
        font-size: 16px;
        ::placeholder{
            font-size: 16px;
        }
    }
    
}
 
`
const Para = styled.p`
    color: #ffffffcf;
    font-size: 17px;
    font-weight: normal;
    @media (min-width: 320px) and (max-width: 767px){
    font-size: 12px;
}
`

const Icon = styled.div`
color: white;
font-size: 25px;
width: 34px;
height: 26px;
@media (min-width: 320px) and (max-width: 767px){
   font-size: 20px;
   width: 34px;
   height: 20px;
}
`
const CenterSignUp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:flex-end ;
  /* height: 90%; */
  padding-bottom: 50px;
h2{
    margin-left: 0;
    padding-top: 0;
    font-size: 38px;
    color: #ffffffcf;
}
@media (min-width: 320px) and (max-width: 767px){
    h2{
        font-size: 30px;
        color: #ffffffcf;
    }
}
`
const UserButton = styled.button`
background-color: #FFCB05;
color: #084A5F;
width: 100%;
height: 60px;
border-radius: 10px;
border: none;
p{
    font-size: 20px;
    font-weight: bolder;
}

@media (min-width: 320px) and (max-width: 767px){
    width: 92%;
    height: 45px;
   margin-top: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   p{
    font-size: 18px;
   }

}
`
const Button = styled.div`
    color: white;
    background-color: #1D1E24;
    border-radius: 30px;
    height: 60px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    p{
        font-size: 18px;
        font-weight: bolder;
    }
    @media (min-width: 320px) and (max-width: 767px){
    width: 80%;
    margin-top: 30px;
    height: 50px;
    p{
        font-size: 15px;
    }
}
`
const GoogleIcon = styled.div`
font-size: 30px;
margin-right: 10px;
@media (min-width: 320px) and (max-width: 767px){
    font-size: 25px;
}
`
const Paras = styled.p`
    color: #ffffffcf;
    font-size: 17px;
    font-weight: 600;
    margin: 15px 0 ;
`
const Visibility = styled.div`
color: #ffffff8d;
font-size: 30px;
padding-right: 20px;
@media (min-width: 320px) and (max-width: 767px){
   font-size: 20px;
   padding-right: 10px;
}

`
const VisibilityOn = styled.div`
color: #ffffff8d;
font-size: 30px;
padding-right: 20px;
display: none;
@media (min-width: 320px) and (max-width: 767px){
   font-size: 20px;
   padding-right: 10px;
}
`
const Member = styled.div`
    color: #ffffffcf;
    font-size: 17px;
    font-weight: 600;
    margin-top: 40px ;
   
    span{
        color: #FFCB05;
        font-size: 18px;
    }
    @media (min-width: 320px) and (max-width: 767px){
    font-size: 14px;
    margin-top: 60px;
    span{
        font-size: 15px;
    }
}
`
const AgentSignInDark:React.FC = () => {
  return (
    <Container>
        
        <Wrapper>
        <h2>MO<span>MO</span></h2>
        <CenterSignUp>
            <h2>Sign In</h2>
            <Para>Join the Momo Community Today !</Para>
            <Button>
                <GoogleIcon>
                <FcGoogle/>
                </GoogleIcon>
                <p>Use Google Account</p>
            </Button>
            <Paras>or</Paras>
        <form>
                
                <UserInput>
                <Icon>
                <MdEmail/>
                </Icon>
                    <input type="email" 
                    required
                    placeholder='Email' />
                </UserInput>
                
                <UserInput>
                <Icon>
                    <RiLockPasswordFill/>
                </Icon>
                    <input type="password" 
                    required
                    placeholder='Password' />
                    <Visibility>
                        <MdVisibilityOff/>
                    </Visibility>
                    <VisibilityOn>
                        <MdVisibility/>
                    </VisibilityOn>
                </UserInput>
                <UserButton>
                    <p>Sign In</p>
                </UserButton>
            </form>
            <Member>
                <p>Don't have an account? <span>Sign Up</span> </p>
            </Member>
        </CenterSignUp>

            
        </Wrapper>
        <Wrapper2>

        </Wrapper2>
    </Container>
  )
}

export default AgentSignInDark
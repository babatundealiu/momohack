import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
background-color: black;

`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
margin: 0 90px;
@media (min-width: 320px) and (max-width: 767px){
    margin: 0 20px;
}
`
const Logo = styled.div`
color: #084A5F;
font-size: 20px;
span{
 color:#FFCB05 ;
}
`
const ButtHold = styled.div`
display: flex;
align-items: center;
gap: 5px;
@media (min-width: 320px) and (max-width: 767px){
    gap: 0;
}
`
const Button1 = styled.button`
background-color: transparent;
color: white;
border: none;
padding: 12px 30px;
font-size: 18px;
cursor: pointer;
outline: none;
border-radius: 10px;
font-weight: 600;
@media (min-width: 320px) and (max-width: 767px){
    padding: 8px 15px;
    font-size: 16px;
    font-weight: bold;
}
`
const Button2 = styled.button`
background-color: #FFCB05;
color: #084A5F;
border: none;
padding: 12px 30px;
font-size: 18px;
cursor: pointer;
outline: none;
border-radius: 10px;
font-weight: 600;
@media (min-width: 320px) and (max-width: 767px){
    padding: 8px 15px;
    font-size: 16px;
    font-weight: bold;

}
`
const HeaderDark:React.FC = () => {
  return (
    <Container>
        <Wrapper>
        <Logo>
            <h2>Mo<span>Mo</span></h2>
        </Logo>
        <ButtHold>
            <Button1>Sign In</Button1>
            <Button2>Sign Up</Button2>
        </ButtHold>
        </Wrapper>
    </Container>
  )
}

export default HeaderDark
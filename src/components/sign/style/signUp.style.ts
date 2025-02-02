import { Link } from "react-router-dom";
import styled from "styled-components";



export const Signcontainer = styled.div`
display: flex;
justify-content: center;
.sign-con{
max-width: 500px;
width: 90vmin;
height: 614px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
margin-top: 120px;

.InsideCon{
    padding: 33px;
    h3{
    font-size: 27px;
    font-weight: bold;
    }
    h2{
        color: rgba(55, 55, 55, 0.80);
        margin-top: 25px;
    }
    .email-input{
        max-width: 434px;
        width: 80vmin;
        height: 50px;
        padding: 15px 20px;
        border-radius: 10px;
        border: 3px solid #a55233;
        background-color: rgba(55, 55, 55, 0.10);
        margin-top: 10px;
        }
        .email-input:hover{
            border: 3px solid #a55233;  
        }
        }
    }
    .chekbox-main{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
    }
    @media only screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
    .sign-but{
        max-width: 434px;
        width: 80vmin;
        height: 50px;
        border-radius: 10px;
        border: 3px solid  #a55233;
        color:  #a55233;
        font-weight: bold;
        background-color:white;
        margin-top: 27px;
        cursor: pointer;
      
    }
    .sign-but:hover{
        background-color: #a55233;
        color: white;
    }
    .lines-con{
        display: flex;
        align-items: center;
        border: none;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;
    }
    .logos-con{
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 20px;
    }
    .create-but{
        max-width: 434px;
        width: 80vmin;
        height: 50px;
        border-radius: 10px;
        border: 3px solid  #a55233;
        color:  #a55233;
        font-weight: bold;
        background-color:white;
        margin-top: 20px;
        cursor: pointer;
      
    }
    .create-but:hover{
        background-color: #a55233 ;
        color: white;
    }
    
  


`;

export const InsideCon = styled.div`

`;

export  const SignLink = styled(Link)`
`;



export const SignInLink = styled(Link)`
`;

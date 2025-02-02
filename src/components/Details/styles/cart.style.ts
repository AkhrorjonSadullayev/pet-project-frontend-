import styled from "styled-components";
export const CartContainer = styled.div`

.cart-back{
    width: 100%;
    height: 550px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h1{
        font-size: 50px;
        font-weight: bold;
    }
}
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    h1{
        font-weight: bold;
    }
    img{
        width: 100px;
        margin-top: 30px;
    }
}
.cart-tr{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 20px 100px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.cart-tr-body{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 20px 100px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.yesBtn{
    border: none;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #7F4D4F;
    color: white;
    cursor: pointer;
}
.open{
    padding: 10px 10px;
    border: none;
    background-color: #cb4335 ;
    color: white;
    font-weight: bold;
    border-radius: 10px;
}
.total{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
    height: 100px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
}
`;


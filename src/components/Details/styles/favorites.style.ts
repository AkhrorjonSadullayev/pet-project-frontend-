import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.favorites-back{
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
        text-align: center;
    }

}
.favorites-con-main{
display: flex;
justify-content: center;
}
.favorites-con{
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 80px;
}
.grid{
    display: grid;
    grid-template-areas: 'a a a a';
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    gap: 30px;
}
.product-img-con{
  padding: 0px 30px;
  gap: 15px; 
    width: 250px;                 
    height: 330px;  
    margin-top: 40px;    
}
.product-img-con:hover{
    box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.1),inset, 
    -10px,-10px,10px white;
}
.img-class{
    padding: 10px;               
    width:220px;
    height: 220px;
    background-color: white;       
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
}

.price{
.name{
color: #777;
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 130.187%; 
margin-top: 14px;
}
.decoration{
    text-decoration-line: line-through;
    color: #777;
}
}
.product-img-con {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
}

.product-img-con:hover{
  transform: scale(1.05); 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
}


.price{
  text-align: center;
}

.price .decoration {
  text-decoration: line-through;
  color: #888;
}

.price p {
  color: #333;
  font-weight: bold;
}
`;
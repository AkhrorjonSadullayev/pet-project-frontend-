import styled from "styled-components";

export const ShopMainContainer = styled.div`
.main-con{
    display: flex;
    justify-content: center;
}

.product-name{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
}
.grid{
    max-width: 1300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    gap: 10px;
    padding: 15px 0px;
}
.product-img-con{
    width: 250px;                 
    height: 320px;  
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
.product-img-con{
    padding: 10px;               
    width: 100%;                  
    height: 100%;                  
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
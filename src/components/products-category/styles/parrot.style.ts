import styled from "styled-components";
export const Padding = styled.div`
`;   
export const MainContainer = styled.div`
.parrot-food-back{
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
.left-side-sort{
    width: 350px;
    padding: 100px 0px 100px 30px;
    .category-style{
        font-weight: bold;
    }
    .Filter-but{
            border-radius: 30px;
            background: var(--Primary-color, #7F4D4F);
            padding: 4px 20px;
            color: white;
            font-weight: bold;
            border: none;
            cursor: pointer;
            margin-top: 20px;
        }
        .Filter-but:hover{
            background-color:#A06B6D;
        }

}
.grid{
    display: flex;
    flex-wrap: wrap;
    padding: 0px 30px;
    gap: 35px; 
    max-width: 1200px;
    width: 100%;
    height: 100%;
}
.product-img-con{
    width: 250px;                 
    height: 320px;  
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
import styled from "styled-components";
export const MainContainer = styled.div`
.delete-new{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: -85px;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        max-width: 1200px;
        width: 100%;
    }
    h1{
        color: var(--Title-Color, #333);
        font-family: Nunito;
        font-size: 36px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-align: center;
    } 
}
`;
export const FilterDataCon = styled.div`
.others-detail-back{
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
.dog-detail-back{
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
.data-img-info{
    display: flex;
    justify-content: center;
    padding: 120px 0px;
    gap: 94px;
}
.data-info-con {
  display: flex;
  gap: 24px;
}

.data-images {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.data-images img {
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
}

.data-images img:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.data-main-image{
  position: relative;
}

.data-main-image img{
  width: 509px;
  height: 666px;
  border-radius: 10px;
}

.image-wrapper{
  position: relative;
  width: 509px;
  height: 666px;
  overflow: hidden;
  cursor: crosshair;
}

.main-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.zoom-container {
  display: flex;
}

.image-wrapper {
  position: relative;
  width: 500px;
  height: 650px;
  overflow: hidden;
}
.zoomed-image {
  width: 500px;
  height: 650px;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.product-info{
        display: flex;
        flex-direction: column;
        max-width: 350px;
        width: 100%;
        gap: 10px;
        .rate{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .price{
            display: flex;
            gap: 10px;
            .decoration{
                text-decoration: line-through;
                color: #888;
            }
        }
        .size{
            display: flex;
            justify-content: space-between;
        }
        .quantity{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            button{
                padding: 5px 15px;
                border: none;
                background-color: #7F4D4F;
                color: white;
                border-radius: 50%;
                font-weight: bold;
                
            }
        }
        .buy-now{
            display: flex;
            justify-content: start;
        }
        .buy-but{
            padding: 11px 21px;
            border-radius: 22.5px;
            background: var(--Primary-color, #7F4D4F);
            color: #F8FBFF;
            font-size: 16px;
            font-weight: 700;
            border: none;
            cursor: pointer;
        }
        .buy-but:hover{
            background: var(--Primary-color-hover, #9E6A6C);
        }
    }
  .image-container {
  position: relative;
  width: 300px; /* Tasvirning boshlang'ich o'lchami */
  height: 300px;
  overflow: hidden; /* Tasvirni konteynerdan tashqariga chiqmaslikni ta'minlaydi */
}

.zoom-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Tasvirni konteynerga moslashtirish */
  transition: transform 0.3s ease; /* Transformatsiyani silliq o'tkazish */
}

.image-container:hover .zoom-image {
  transform: scale(1.5); /* Tasvirni 1.5x kattalashtiradi */
}

`;
export const TabContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
.comment{
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 900px;
    width: 100%;
    .button{
        border: none;
        width: 900px;
        background-color:#7F4D4F ;
        color:  white;
        font-weight: bold;
        border-radius: 25px;
        cursor: pointer;
    }
    .buttom:hover{
        background-color:#9e6f6f ;
    }
}
.FAQ{
    max-width: 930px;
    width: 100%;
    display: flex;
    gap: 20px;
    .box{
        width: 450px;
    }
}
`;
export const AlsoLikeContainer = styled.div`
display: flex;
justify-content: center;
.grid{
    max-width: 1300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    padding: 85px 0px;
    gap: 10px;
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
export const RelaitedProContainer = styled.div`
display: flex;
justify-content: center;
.grid{
    max-width: 1300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    padding: 85px 0px;
    gap: 10px;
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



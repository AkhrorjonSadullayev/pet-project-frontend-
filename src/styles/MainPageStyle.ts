import styled from "styled-components";

export const MainPageCon = styled.div`
`;
export const FirstCon = styled.div`
.FirstCon-1{
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    gap: 25px;
}
.left-side-first{
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 300px;
    height: 455px;

}
.dog-food-con{
    width: 304px;
    height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #FFF;
    border-top-right-radius:5px;
    border-top-left-radius:5px;
    cursor: pointer;
    .dog-icon{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
        padding: 17px 18px 17px 21px;
    }
    p{
        color: #555;
        font-size: 16px;
        margin-bottom: -2px;
    }  
    }
}
.dog-food-con:hover{
    background-color: #F8FBFF;
}

.cat-food-con{
    width: 304px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2EDED;
    cursor: pointer;
    .dog-icon{
        display: flex;
        align-items: center;
        img{
        padding: 17px 18px 17px 21px;
    }
    p{
        color: #555;
        font-size: 16px;
        margin-bottom: -2px;
    }  
    }
}
.cat-food-con:hover{
    background-color:#e6cfd0 ;
}


.Fish-food-con{
    width: 304px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF;
    cursor: pointer;
    .dog-icon{
        display: flex;
        align-items: center;
        img{
        padding: 17px 18px 17px 21px;
    }
    p{
        color: #555;
        font-size: 16px;
        margin-bottom: -2px;
    }  
    }
}
.Fish-food-con:hover{
    background-color: #F8FBFF;
}
.toy-con{
    width: 304px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2EDED;
    cursor: pointer;
    .dog-icon{
        display: flex;
        align-items: center;
        img{
        padding: 17px 18px 17px 21px;
    }
    p{
        color: #555;
        font-size: 16px;
        margin-bottom: -2px;
    }  
    }
}
.toy-con:hover{
    background-color:#e6cfd0 ;
}

.parrot-food-con{
    width: 304px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF;
    cursor: pointer;
    .dog-icon{
        display: flex;
        align-items: center;
        img{
        padding: 17px 18px 17px 21px;
    }
    p{
        color: #555;
        font-size: 16px;
        margin-bottom: -2px;
    }  
    }
}
.parrot-food-con:hover{
    background-color: #F8FBFF;
}

.rabbit-food-con{
    width: 304px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2EDED;
    cursor: pointer;
    .dog-icon{
        display: flex;
        align-items: center;
        img{
        padding: 17px 18px 17px 21px;
    }
    p{
        color: #555;
        font-size: 16px;
        margin-bottom: -2px;
    }  
    }
}
.rabbit-food-con:hover{
    background-color:#e6cfd0 ;
}

.Accessories-con{
    width: 304px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF;
    cursor: pointer;
    .dog-icon{
        display: flex;
        align-items: center;
        img{
        padding: 17px 18px 17px 21px;
    }
    p{
        color: #555;
        font-size: 16px;
        margin-bottom: -2px;
    }  
    }
}
.Accessories-con:hover{
    background-color: #F8FBFF;
}
.small-pet-con{
    width: 304px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2EDED;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    cursor: pointer;
    .dog-icon{
        display: flex;
        align-items: center;
        img{
        padding: 17px 18px 17px 21px;
    }
    p{
        color: #555;
        font-size: 16px;
        margin-bottom: -2px;
    }  
    }
}
.small-pet-con:hover{
    background-color:#e6cfd0 ;
}

////////////////////

.right-side-first{
    max-width: 966px;
    width: 100%;
    height: 458px;
    border-radius: 5px;
    background-color: #F2EDED;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    gap: 70px;
    .best-left{
        flex: 2.5;
        max-width: 300px;
        width: 100%;
      h3{
        color: #333;
        font-family: Pacifico;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      h1{
        color: var(--Title-Color, #333);
        font-family: Nunito;
        font-size: 46px;
        font-style: normal;
        font-weight: 900;
      }
      p{
        color: var(--Text-02, #777);
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 129.188%;
        text-transform: lowercase;
      }
      button{
        width: 151px;
        height: 45px;
        color: #F8FBFF;
        font-family: Nunito;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        background-color: #7F4D4F;
        border-radius: 22.5px;
        border: none;
        cursor: pointer;
        margin-top: 10px;
      }
      button:hover{
        background-color: #4c3536;
      }
      img{
        margin-bottom: -50px;
      }
    }
    .best-right{
        flex: 3;
        display: flex;
        img{
            max-width: 471px;
            width: 100%;
            height: 355px;
            
        }
    }
}
//FIRST container-1 end

.delete{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    margin-top: 114px;
    h3{
        color: var(--Primary-color, #7F4D4F);
        text-align: center;
        font-family: Pacifico;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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

//SECOND container-1 end

.First-grid {
    display: flex;                 
    justify-content: center; 
}

.grid-con{
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    gap: 35px; 
    max-width: 1200px;
    width: 100%;
    height: 100%;
}
.product-img-con{
    width: 250px;                 
    height: 350px;  
    margin-top: 40px;
    .img{
        width: 200px;
        height: 250px;
    }
}
.product-img-con:hover{
    box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.1),inset, 
    -10px,-10px,10px white;
}
.img-class{
    padding: 10px;               
    background-color: white;       
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
}
.product-img-con img {
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

.sale{
    width: 1200px;
    background-color: #7F4D4F;
    height: 220px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    padding-left: 120px;
    align-items: center;
    .sale-left{
    color: white;
    width: 300px;
    h1{
        font-size: 45px;
    }
    p{
       color: #e6cfd0;
    }
    button{
        width: 134px;
        height: 45px;
        border-radius: 22.5px;
        background-color:orangered;
        color: white;
        font-weight: bold;
        border: none;
        font-size: 15px;
        cursor: pointer;
        margin-top: 5px;
    }
    button:hover{
        background-color: orange;
    }
    }
    .dog-cat-con{
        width: 350px;
        height: 220px;
        border-bottom-right-radius:20px;
        border-top-right-radius:20px;
        margin-bottom: -5px;
    }
}
.delete-new{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    margin-top: 200px;
    h3{
        color: var(--Primary-color, #7F4D4F);
        text-align: center;
        font-family: Pacifico;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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

export const SecondCon = styled.div`
width: 100%;
height:884px;
background-color: #F2EDED;
.blog-title{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    div{
        margin-top: 114px;
        display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    }
    h3{
        color: var(--Primary-color, #7F4D4F);
        text-align: center;
        font-family: Pacifico;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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

.news-con{
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .news-img{
        display: flex;
        flex-direction: column;
        img{
            display: flex;
            width: 500px;
            height: 350px;
            border-radius: 10px;
        }
        .date-con{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: -40px;
        }
        .date-con div{
            width: 84px;
            height: 74px;
            border-radius: 6px;
            background: #ECE4E5;
            padding: 9px;
            font-size: 20px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 5px solid white;
        }

    }
}


`;

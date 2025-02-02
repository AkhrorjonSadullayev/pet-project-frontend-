import styled from "styled-components";
export const AboutContainer = styled.div`
.aboutUs-back{
    width: 100%;
    height: 550px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 50px;
        font-weight: bold;
    }
}
.first-con{
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-top: 100px;
    .first-con-left{
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .big-img{
            width: 500px;
            height: 500px;
    }
    .small-con{
        max-width: 800px;
        width: 100%;
        flex: 1;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-top: -300px;
        margin-right: -50px;
        gap: 30px;
    }
    .scribble-svg{
        width: 100.985px;
        height: 100.985px;
    }
    .small-img{
        width: 300px;
        height: 320px;
    }
    .first-con-right{
        max-width: 570px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
        h2{
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
            font-weight: 700;
            line-height: normal;
            text-transform: capitalize;
            margin-top: -10px;
        }
    }
    .deals-con{
        display: flex;
        gap: 50px;
    }
    .deals{
        margin-top: 5px;
        display: flex;
        gap: 5px;
    }
    .my-con{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .my-img{
        width: 67px;
        height: 67px;
        border-radius: 50%;
    }
    .name{
        display: flex;
        flex-direction: column;
        margin-bottom: -20px;
    }
}
.backgroung-brown{
    margin-top: 80px;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        color: var(--White, #FFF);
        text-align: center;
        font-family: Pacifico;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    h1{
        color: var(--White, #FFF);
        text-align: center;
        font-family: Nunito;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
.triple-squares{
    display: flex;
    z-index: 1;
    justify-content: center;
    gap: 27px;
    margin-top: -100px;
}
.first-square{
        width: 414px;
        height: 319px;
        border-radius: 5px;
        background: var(--White, #FFF);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
        h3{
            color: #333;
            text-align: center;
            font-family: Nunito;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: uppercase;
        }
        p{
            color: grey;  
        }
}
.logo-container{
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 50px 0px;
}
.logo-img{
    width: 173px;
    height: 94px;
}
`;
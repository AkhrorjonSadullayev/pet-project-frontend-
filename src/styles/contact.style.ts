import styled from "styled-components";
export const ContactContainer = styled.div`
.contact-back{
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
.triple-squares{
    display: flex;
    justify-content: center;
    gap: 27px;
    padding: 150px 0px 120px 0px;
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
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        h3{
            color: #333;
            text-align: center;
            font-family: Nunito;
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
        }
        h4{
            color: #333;
            text-align: center;
            font-family: Nunito;
            font-weight: bold;
        }
        p{
            color: grey;  
        }
}
.message-con{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 1296px;
        height: 640px;
    }
    .send{
        z-index: 1;
        margin-top: -400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        width: 922px;
        height: 617px;
        background-color: white;
        padding: 74px 50px;
        h1{
            color: #000;
            text-align: center;
            font-family: Nunito;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px; /* 125% */
            text-transform: capitalize;
        }
        img{
            width: 49px;
            height: 14px;
        }
    }
    .input-con{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .title-in{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 5px;
    }
}
`;
import styled from "styled-components";

export const NotContainer = styled.div`
display: flex;
justify-content: center;
.right-not{
    display: flex;
    justify-content: end;
    align-items: end;
    img{
    width: 660px;
    height: 585px;
    }
}
.left-not{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    h1{
        color: var(--Primary-color, #7F4D4F);
        text-align: center;
        font-family: Pacifico;
        font-size: 300px;
        font-weight: 400;
    }
    h3{
        color: #333;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
    }
    button{
        display: inline-flex;
        padding: 14px 24px;
        border-radius: 30px;
        border: 1px solid var(--Line-Color, #F2F2F2);
        background: var(--White, #FFF);
        color: var(--Primary-color, #7F4D4F);
        font-family: Nunito;
        font-size: 16px;
        font-weight: 700;
    }
}
`;
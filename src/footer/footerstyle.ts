import styled from "styled-components";
export const FooterCon = styled.div`
  padding-top: 50px;
  .box-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img {
      width: 55px;
      height: 55px;
    }
    h3 {
      color: #f8fbff;
      font-family: Nunito;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      text-transform: uppercase;
    }
    p {
      color: #f8fbff;
      font-family: Nunito;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      text-transform: capitalize;
    }
  }

  .footer-down {
    display: flex;
    justify-content: space-around;
    padding: 100px;
    .first-left-con {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .WhiteNavLeft {
      display: flex;
      align-items: center;
      gap: 10px;
      h1 {
        font-size: 26px;
      }
      p {
        font-size: 15px;
        margin-top: -8px;
      }
      .choice-con {
        display: flex;
        flex-direction: column;
      }
    }
    .first-left-con {
      max-width: 303px;
      width: 100%;
      p {
        color: #777;
      }
    }
    .second-left-con {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h3 {
        font-family: Nunito;
        font-size: 20px;
        color: #333;
      }
      p {
        color: #777;
        font-size: 16px;
      }
    }
    .third-left-con {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 306px;
    }
  }
`;

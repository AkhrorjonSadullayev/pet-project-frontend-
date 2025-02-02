import styled from "styled-components";
export const WhiteCon = styled.div`

  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
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
  .WhiteNavRight {
    display: flex;
  }
  .WhiteNavRigh-mini {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .contact-phone {
    display: flex;
    align-items: center;
    gap: 22px;
    .contact {
      display: flex;
      flex-direction: column;
      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        color: #777;
      }
      h5 {
        margin-top: -20px;
      }
    }
  }
`;
export const BrownCon = styled.div`
  height: 91px;
  background-color: #7f4d4f;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .main-nav-con {
    display: flex;
    width: 1300px;
    justify-content: space-between;
    .navbar-left {
      display: flex;
      align-items: center;
      gap: 20px;
      color: white;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      p {
        cursor: pointer;
      }
      p:hover {
        color: orange;
      }
    }
    .navbar-right {
      display: flex;
      align-items: center;
      gap: 30px;
    }
  }
  .add-button{
  background-color: #7F4D4F;
  color: #FFFFFF; /* White text */
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
 .add-button{
  background-color: #9A6163; 
  transform: translateY(-3px); 
 }
 .add-button:active {
  background-color: #68393B; /* Slightly darker shade */
  transform: translateY(1px); /* Button press effect */
}
.add-button:focus{
  outline: 2px solid #9A6163; /* Focus indicator */
}
`;

import styled from "styled-components";

export const CarouselDataCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .carousel-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: 1200px; /* Set main container width */
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .carousel-image img {
    max-width: 500px;
    width: 100px; /* Set image width */
    height: auto;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: opacity 0.5s;
    flex: 1;
  }

  .carousel-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    width: calc(100% - 500px); /* Fill remaining space */
    font-family: Arial, sans-serif;
    color: #333;
  }

  .carousel-info p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .carousel-buttons {
    background-color: #7f4d4f;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .prev-btn,
  .next-btn {
    padding: 8px 16px;
    background-color: #a06a6a;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .prev-btn:hover,
  .next-btn:hover {
    background-color: #6b3f3f;
  }
  @media (max-width: 1200px) {
    .carousel-container {
      flex-direction: column; /* Stack elements on top of each other */
    }

    .carousel-image {
      max-width: 100%; /* Full width on smaller screens */
    }

    .carousel-info {
      padding: 10px; /* Reduced padding */
    }
  }

  @media (max-width: 800px) {
    .carousel-info h2 {
      font-size: 1.2em; /* Smaller title */
    }

    .carousel-buttons button {
      width: 40px; /* Smaller button size */
      height: 40px;
    }
  }

  @media (max-width: 600px) {
    .carousel-info h2 {
      font-size: 1em; /* Even smaller title */
    }

    .carousel-buttons button {
      width: 35px; /* Smaller button size */
      height: 35px;
    }

    .carousel-indicators span {
      height: 8px; /* Smaller indicators */
      width: 8px;
    }
  }

  @media (max-width: 400px) {
    .carousel-image img {
      width: 100%; /* Image full width */
    }

    .carousel-info {
      padding: 5px; /* Further reduced padding */
    }

    .carousel-buttons {
      margin-top: 10px; /* Adjust margin */
    }

    .carousel-indicators span {
      height: 5px; /* Smaller indicators */
      width: 5px;
    }
  }
`;

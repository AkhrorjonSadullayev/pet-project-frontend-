import React, { useState, useEffect } from "react";
import styled from "styled-components";

type ArrivalListItem = {
  id: number;
  image: string;
  info: string;
  name: string;
};

type CarouselProps = {
  ArrivalList: ArrivalListItem[];
};

const CarouselContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  transition: transform 0.5s ease-in-out;
`;

const InfoWrapper = styled.div`
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #777;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #7f4d4f;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: #5c3235;
  }
`;

const IndicatorContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Indicator = styled.span<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#7F4D4F" : "#ccc")};
  cursor: pointer;
  transition: 0.3s;
`;

const CarouselComponent: React.FC<CarouselProps> = ({ ArrivalList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (!ArrivalList.length) return;
    const interval = setInterval(() => handleNext(), 3000);
    return () => clearInterval(interval);
  }, [ArrivalList]);

  if (!ArrivalList.length) return <p>No data available</p>;

  const handleNext = () => {
    setAnimation(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ArrivalList.length);
      setAnimation(false);
    }, 300);
  };

  const handlePrev = () => {
    setAnimation(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? ArrivalList.length - 1 : prev - 1));
      setAnimation(false);
    }, 300);
  };

  return (
    <CarouselContainer>
      <ImageWrapper>
        <Image
          src={ArrivalList[currentIndex].image}
          alt={ArrivalList[currentIndex].name}
          style={{
            transform: animation ? "scale(1.1)" : "scale(1)",
          }}
        />
      </ImageWrapper>

      <InfoWrapper>
        <Title>${ArrivalList[currentIndex].name}</Title>
        <Description>{ArrivalList[currentIndex].info}</Description>
      </InfoWrapper>

      <ButtonContainer>
        <Button onClick={handlePrev}>&lt; Prev</Button>
        <Button onClick={handleNext}>Next &gt;</Button>
      </ButtonContainer>

      <IndicatorContainer>
        {ArrivalList.map((_, index) => (
          <Indicator
            key={index}
            active={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
};

export default CarouselComponent;

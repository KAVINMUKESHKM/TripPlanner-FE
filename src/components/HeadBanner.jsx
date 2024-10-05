// src/components/Banner.jsx
import React from 'react';
import styled from 'styled-components';
import FlightSvg from '../assets/Flight.svg'; // Adjust the path if necessary

// Container for the whole banner with gradient and image background
const BannerContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 537px;
  left: 0;
  right: 0;

  top: 90px;
  
  background: linear-gradient(90deg, rgba(0, 35, 77, 0.63) 11.46%, rgba(0, 35, 77, 0) 77.37%), 
              url(${FlightSvg}); /* Background gradient and image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 174px 120px 126px;
  gap: 10px;
`;

const TextContainer = styled.div`
  position: absolute;
 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 440px;
  height: 203px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

// Title styling: "Make your travel wishlist, we'll do the rest"
const Title = styled.h1`
  width: 440px;
  height: 171px;
  bottom: 0;
  right: 0;
  font-family: 'TradeGothic LT Extended', sans-serif; /* Ensure this font is available */
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 57px;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

// Subtitle styling: "Special offers to suit your plan"
const Subtitle = styled.h2`
  width: 375px;
  height: 24px;
  bottom: 0;
  right: 0;
  font-family: 'Montserrat', sans-serif; /* Ensure this font is available */
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <Title>Make your Travel Wishlist, We&apos;ll do the rest</Title>
        <Subtitle>Special offers to suit your plan</Subtitle>
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;

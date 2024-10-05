import React from 'react';
import styled from 'styled-components';
import WorldMap from '../assets/world.svg'; // Path to your SVG map

// Main container for the whole Places section
const PlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 24px;
  width: 100%;
  background-color: #F6F6F6;
`;

// Text section (title and subtitle)
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 1232px;
  text-align: center;
  margin-top: 40px;
`;

// Title styling
const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  margin: 0;
`;

// Subtitle styling
const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin: 0;
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: auto;
  margin-top: 24px;
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
`;

// Button styling
const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid #8DD3BB;
  border-radius: 4px;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #112211;
  cursor: pointer;
  margin-top: 20px;
`;

// Places component
const Places = () => {
  return (
    <PlacesContainer>
      <TextContainer>
        <Title>Let's go places together</Title>
        <Subtitle>
          Discover the latest offers and news and start planning your next trip with us.
        </Subtitle>
      </TextContainer>

      <MapContainer>
        <MapImage src={WorldMap} alt="World Map" />
      </MapContainer>

      <Button>See All</Button>
    </PlacesContainer>
  );
};

export default Places;

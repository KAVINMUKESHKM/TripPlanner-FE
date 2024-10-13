// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import sside from '../assets/seaside.jpg';
// Skeleton keyframes for the loading effect
const shimmer = keyframes`
  0% {
    background-position: -100%;
  }
  100% {
    background-position: 100%;
  }
`;

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #e4f5f1, #d9e6f2);
    min-height: 100vh;
    padding: 40px 20px;
`;

const Header = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 32px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const AttractionContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    padding: 20px;
    margin: 10px 0;
    height: 160px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    justify-content: space-between;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const AttractionImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-right: 20px;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AttractionDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const AttractionName = styled.h2`
    font-size: 26px;
    font-weight: bold;
    color: #8dd3bb;
    margin-bottom: 5px;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
    transform-origin: center;

    &:hover {
        color: #006d5b;
        transform: scale(1.03);
    }
`;

const AttractionDescription = styled.p`
    font-size: 18px;
    color: #555;
    margin-top: 5px;
`;

const CheckBox = styled.input`
    margin-left: auto;
    transform: scale(1.8);
    cursor: pointer;
`;

const CalculateButton = styled.button`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 30px;
    font-size: 20px;
    color: white;
    background-color: #006d5b;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease, font-size 0.3s ease;

    &:hover {
        background-color: #00504a;
        font-size: 22px;
    }

    &:active {
        font-size: 24px;
    }
`;

const SkeletonLoader = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
    border-radius: ${(props) => props.borderRadius || '4px'};
`;

// Skeleton structure for the loading card
const SkeletonAttraction = () => (
    <AttractionContainer>
        <SkeletonLoader width="150px" height="150px" borderRadius="10px" style={{ margin: '10px' }} />
        <AttractionDetails>
            <SkeletonLoader width="60%" height="26px" />
            <SkeletonLoader width="80%" height="18px" style={{ marginTop: '10px' }} />
        </AttractionDetails>
        <SkeletonLoader width="100px" height="24px" borderRadius="4px" />
    </AttractionContainer>
);

const AttractionsPage = () => {
    const location = useLocation();
    const { destination, startDate, totalDays } = location.state || {};
    const [attractions, setAttractions] = useState([]);
    const [selectedAttractions, setSelectedAttractions] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const navigate = useNavigate();

    useEffect(() => {
        if (!destination || !startDate || !totalDays) {
            console.error("Destination, start date or total days is missing.");
            return;
        }

        const fetchAttractions = async () => {
            try {
                const response = await axios.get('http://localhost:7000/attraction/getAttraction', {
                    params: {
                        destination,
                        days: totalDays,
                        date: startDate,
                    },
                });

                const attractionsData = response.data.flatMap(item =>
                    item.attractions.map(a => ({
                        id: a.attraction.id,
                        name: a.attraction.name,
                        description: a.attraction.description,
                        category: a.attraction.category,
                        latitude: a.attraction.latitude,
                        longitude: a.attraction.longitude,
                        best_climate: a.attraction.best_climate,
                        ideal_temp_min: a.attraction.ideal_temp_min,
                        ideal_temp_max: a.attraction.ideal_temp_max,
                        ideal_weather: a.attraction.ideal_weather,
                        feels_like: item.feels_like,
                        weather: item.weather,
                        restaurants: a.restaurant
                    }))
                );

                setAttractions(attractionsData || []);
            } catch (error) {
                console.error("Error fetching attractions:", error);
            } finally {
                setIsLoading(false); // Data has finished loading
            }
        };

        fetchAttractions();
    }, [destination, startDate, totalDays]);

    // Handle Checkbox Change
    const handleCheckboxChange = (attraction) => {
        setSelectedAttractions(prev => {
            if (prev.includes(attraction)) {
                return prev.filter(item => item !== attraction);
            }
            return [...prev, attraction];
        });
    };

    // Haversine function for distance calculation
    const haversine = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon1 - lon2) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    // On button click, calculate the shortest path and navigate to the next page
    const handleCalculatePath = () => {
        if (selectedAttractions.length < 2) {
            alert("Please select at least 2 attractions to calculate a path.");
            return;
        }
    
        let totalDistance = 0;
        selectedAttractions.forEach((attraction, index) => {
            if (index < selectedAttractions.length - 1) {
                const distance = haversine(
                    attraction.latitude,
                    attraction.longitude,
                    selectedAttractions[index + 1].latitude,
                    selectedAttractions[index + 1].longitude
                );
                totalDistance += distance;
    
                console.log(`Distance between ${attraction.name} and ${selectedAttractions[index + 1].name}: ${distance}`);
            }
        });
    
        console.log(`Total distance: ${totalDistance}`);
        
        navigate('/shortest-path', { state: { path: selectedAttractions, totalDistance: totalDistance.toFixed(2) } });
    };
    
    const handleAttractionClick = (attraction) => {
        navigate('/Attractions_Description', { state: { attraction, restaurants: attraction.restaurants || [] } });
    };

    return (
        <Container>
            <Header>{destination} Attractions</Header>
            {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => <SkeletonAttraction key={index} />)
            ) : (
                attractions.map((attraction) => (
                    <AttractionContainer key={attraction.id}>
                        <AttractionImage src={sside} alt={attraction.name} />
                        <AttractionDetails>
                            <AttractionName onClick={() => handleAttractionClick(attraction)}>{attraction.name}</AttractionName>
                            <AttractionDescription>{attraction.description}</AttractionDescription>
                        </AttractionDetails>
                        <CheckBox 
                            type="checkbox" 
                            checked={selectedAttractions.includes(attraction)} 
                            onChange={() => handleCheckboxChange(attraction)} 
                        />
                    </AttractionContainer>
                ))
            )}
            <CalculateButton onClick={handleCalculatePath}>Calculate Path</CalculateButton>
        </Container>
    );
};

export default AttractionsPage;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HimalayanCafe from '../assets/himalayan_cafe.jpg'; 
import  KailashRestaurant from '../assets/kailash_restaurant.jpg'; 
import  MountFoodies from '../assets/mount_foodies.jpg'; 
import NatureFeast from '../assets/neature_feast.jpg'; 
import SunflowerRestaurant from '../assets/sunflower1.webp'; 
import OceanBreeze from '../assets/ocean_breeze.webp'; 
import BeachsideDiner from '../assets/beachside_diner.webp'; 
import TropicalTaste from '../assets/tropical_Taste.jpeg'; 
import ContemporaryCafe from '../assets/contemporary.jpg'; 
import HistoryBistro from '../assets/history.webp'; 
import Artisan from '../assets/artisan.webp'; 
import CulturalCuisine from '../assets/cultural_cuisine.jpg'; 
import UrbanBites from '../assets/urban bites.png'; 
import SquareEats from '../assets/square_eats.jpg'; 
import CityFlavors from '../assets/city_flavours.webp'; 
import DowntownDining from '../assets/downtown.webp'; 
import GodsCafe from '../assets/gods_cafe.jpeg'; 
import TempleCafe from '../assets/temple_view.jpg'; 
import CulturalDining from '../assets/cultural.jpg'; 
import HeritageInn from '../assets/heritage_inn.jpeg'; 

// Container for the entire page
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f4f4f9;
    min-height: 100vh;
    box-sizing: border-box;
`;

// Container for the image section
const ImageContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-bottom: 30px;
`;

// Image styling with reduced height, object-fit for responsive design, and a light border
const AttractionImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 400px;  
    object-fit: cover;
    border: 2px solid rgba(0, 0, 0, 0.3);  // Lighter black border
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// Attribute container for holding the description and details
const AttributeContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    font-size: 18px;
    color: #333;
    line-height: 1.8;
    text-align: justify;
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(135deg, #f0f0f0, #f9f9f9); 
    }
`;

// Styling for each attribute item with added icons, hover effects, and transitions
const AttributeItem = styled.div`
    margin-bottom: 20px;
    padding: 15px 10px;
    font-size: 20px;
    color: #444;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    transition: all 0.3s ease;

    &:hover {
        background-color: #eef2f7;
        transform: translateX(10px); 
    }
`;

// Adding an icon placeholder before each attribute
const AttributeIcon = styled.span`
    font-size: 25px;
    margin-right: 15px;
    color: #007BFF;
`;

// Bold text styling for the attribute titles
const BoldText = styled.span`
    font-weight: bold;
    color: #112211;
    font-size: 22px;
    letter-spacing: 1.2px;  
    font-family: 'Arial', sans-serif;  
`;

// Attribute content styling
const AttributeContent = styled.span`
    color: #666;
    font-size: 18px;
    margin-left: 10px;
    font-family: 'Georgia', serif;  
`;

// Star rating styling
const StarRating = styled.div`
    font-size: 30px;
    color: #ffd700;
    margin-top: 5px;
`;

// Review section styling with less spacing
const Reviews = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-align: left;

    p {
        margin-bottom: 5px;
    }
`;

// Go Button styling centered at the bottom
const GoButton = styled.button`
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 40px;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #0056b3;
    }

    align-self: center;
`;

// Restaurant Container
const RestaurantContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
`;

// Restaurant Box Styling
const RestaurantBox = styled.div`
    flex: 1;
    margin: 0 10px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);  // Enlarge effect on hover
    }
`;

// Restaurant Image Styling
const RestaurantImage = styled.img`
    width: 100%;
    height: 20rem;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.3);  // Lighter black border
`;

// Restaurant Name and Details Styling
const RestaurantDetails = styled.div`
    font-size: 16px;
    color: #333;
    margin-top: 10px;
    display: flex;
    flex-direction: column; 
    text-align: left;
    align-items: flex-start;
`;


const AttractionDescriptionPage = () => {
    const location = useLocation();
    const attraction = location.state?.attraction;
    const navigate = useNavigate();
    const [userReview, setUserReview] = useState(attraction ? attraction.reviews : 0);

    // Function to render stars based on reviews
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(i < userReview ? '★' : '☆');
        }
        return stars.join('');
    };

    // Function to handle button click and navigate
    const handleGoClick = () => {
        navigate('/another-page');
    };

    const renderRestaurants = () => {
        console.log(attraction);
        
        if (attraction.name === "Mountain Vista") {
            return (
                <>
                console.log("hi");
                
                    <RestaurantBox>
                        <RestaurantImage src={HimalayanCafe} alt="Himalayan Cafe" />
                        <RestaurantDetails>
                            <strong>Himalayan Delight</strong><br />
                            Distance: 1.2 km<br />
                            Rating: 4.5/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={KailashRestaurant} alt="Kailash Restaurant" />
                        <RestaurantDetails>
                            <strong>Kailash Restaurant</strong><br />
                            Distance: 0.8 km<br />
                            Rating: 4.7/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={MountFoodies} alt="Mount Foodies" />
                        <RestaurantDetails>
                            <strong>Mount Foodies</strong><br />
                            Distance: 1.0 km<br />
                            Rating: 4.6/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={NatureFeast} alt="Nature's Feast" />
                        <RestaurantDetails>
                            <strong>Nature's Feast</strong><br />
                            Distance: 1.5 km<br />
                            Rating: 4.8/5
                        </RestaurantDetails>
                    </RestaurantBox>
                </>
            );
        } else if (attraction.name === "Beach Paradise") {
            return (
                <>
                    <RestaurantBox>
                        <RestaurantImage src={SunflowerRestaurant} alt="SunFlower Restaurant" />
                        <RestaurantDetails>
                            <strong>SunFlower Restaurant</strong><br />
                            Distance: 0.5 km<br />
                            Rating: 4.6/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={OceanBreeze} alt="Ocean Breeze" />
                        <RestaurantDetails>
                            <strong>Ocean Breeze</strong><br />
                            Distance: 0.7 km<br />
                            Rating: 4.4/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={BeachsideDiner} alt="Beachside Diner" />
                        <RestaurantDetails>
                            <strong>Beachside Diner</strong><br />
                            Distance: 1.0 km<br />
                            Rating: 4.5/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={TropicalTaste} alt="Tropical Taste" />
                        <RestaurantDetails>
                            <strong>Tropical Taste</strong><br />
                            Distance: 1.2 km<br />
                            Rating: 4.7/5
                        </RestaurantDetails>
                    </RestaurantBox>
                </>
            );
        } else if (attraction.name === "Historic Museum") {
            return (
                <>
                    <RestaurantBox>
                        <RestaurantImage src={ContemporaryCafe} alt="Contemporary Cafe" />
                        <RestaurantDetails>
                            <strong>Contemporary Cafe</strong><br />
                            Distance: 0.6 km<br />
                            Rating: 4.3/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={HistoryBistro} alt="History Bistro" />
                        <RestaurantDetails>
                            <strong>History Bistro</strong><br />
                            Distance: 0.4 km<br />
                            Rating: 4.5/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={Artisan} alt="Artisan's Table" />
                        <RestaurantDetails>
                            <strong>Artisan's Table</strong><br />
                            Distance: 0.3 km<br />
                            Rating: 4.6/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={CulturalCuisine} alt="Cultural Cuisine" />
                        <RestaurantDetails>
                            <strong>Cultural Cuisine</strong><br />
                            Distance: 0.5 km<br />
                            Rating: 4.4/5
                        </RestaurantDetails>
                    </RestaurantBox>
                </>
            );
        } else if (attraction.name === "City Square") {
            return (
                <>
                    <RestaurantBox>
                        <RestaurantImage src={CityFlavors} alt="City Flavors" />
                        <RestaurantDetails>
                            <strong>City Flavors</strong><br />
                            Distance: 0.2 km<br />
                            Rating: 4.5/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={UrbanBites} alt="Urban Bite" />
                        <RestaurantDetails>
                            <strong>Urban Bite</strong><br />
                            Distance: 0.3 km<br />
                            Rating: 4.6/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={SquareEats} alt="Square Eats" />
                        <RestaurantDetails>
                            <strong>Square Eats</strong><br />
                            Distance: 0.4 km<br />
                            Rating: 4.4/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={DowntownDining} alt="Downtown Dining" />
                        <RestaurantDetails>
                            <strong>Downtown Dining</strong><br />
                            Distance: 0.5 km<br />
                            Rating: 4.3/5
                        </RestaurantDetails>
                    </RestaurantBox>
                </>
            );
        } else if (attraction.name === "Cultural Temple") {
            return (
                <>
                    <RestaurantBox>
                        <RestaurantImage src={GodsCafe} alt="God's Own Cafe" />
                        <RestaurantDetails>
                            <strong>Sacred Flavors</strong><br />
                            Distance: 0.4 km<br />
                            Rating: 4.5/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={TempleCafe} alt="Temple View Cafe" />
                        <RestaurantDetails>
                            <strong>Temple View Cafe</strong><br />
                            Distance: 0.6 km<br />
                            Rating: 4.6/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={CulturalDining} alt="Cultural Dining" />
                        <RestaurantDetails>
                            <strong>Cultural Dining</strong><br />
                            Distance: 0.5 km<br />
                            Rating: 4.7/5
                        </RestaurantDetails>
                    </RestaurantBox>
                    <RestaurantBox>
                        <RestaurantImage src={HeritageInn} alt="Heritage Inn" />
                        <RestaurantDetails>
                            <strong>Heritage Inn</strong><br />
                            Distance: 0.7 km<br />
                            Rating: 4.8/5
                        </RestaurantDetails>
                    </RestaurantBox>
                </>
            );
        }
    };

    return (
        <Container>
            <ImageContainer>
                <AttractionImage src={attraction.image} alt={attraction.name} />
            </ImageContainer>
            <AttributeContainer>
                <h2>{attraction.name}</h2>
                
                <AttributeItem>
                    <AttributeIcon>📝</AttributeIcon>
                    <BoldText>Description:</BoldText>
                    <AttributeContent>{attraction.largeDescription}</AttributeContent>
                </AttributeItem>
                <AttributeItem>
                    <AttributeIcon>📍</AttributeIcon>
                    <BoldText>Ideal Weather:</BoldText>
                    <AttributeContent>{attraction.weather}</AttributeContent>
                </AttributeItem>
                <AttributeItem>
                    <AttributeIcon>📍</AttributeIcon>
                    <BoldText>Best Time To Visit:</BoldText>
                    <AttributeContent>{attraction.bestTime}</AttributeContent>
                </AttributeItem>
                <AttributeItem>
                    <AttributeIcon>📍</AttributeIcon>
                    <BoldText>Timings(Weekdays):</BoldText>
                    <AttributeContent>{attraction.timings.weekdays}</AttributeContent>
                </AttributeItem>
                <AttributeItem>
                    <AttributeIcon>📍</AttributeIcon>
                    <BoldText>Timings(Weekends):</BoldText>
                    <AttributeContent>{attraction.timings.weekends}</AttributeContent>
                </AttributeItem>
                <AttributeItem>
                    <AttributeIcon>⭐</AttributeIcon>
                    <BoldText>Rating:</BoldText>
                    <AttributeContent>{renderStars()}</AttributeContent>
                </AttributeItem>
                <AttributeItem>
                    <AttributeIcon>💬</AttributeIcon>
                    <BoldText>Reviews:</BoldText>
                    <AttributeContent>{attraction.reviewsCount} reviews</AttributeContent>
                </AttributeItem>
            </AttributeContainer>
            {/* <Reviews>
                <p>User Reviews:</p>
                {attraction.reviews.map((review, index) => (
                    <p key={index}>"{review}"</p>
                ))}
            </Reviews> */}
            <GoButton onClick={handleGoClick}>Go to Next Page</GoButton>
            <RestaurantContainer>
                {renderRestaurants()}
            </RestaurantContainer>
        </Container>
    );
};

export default AttractionDescriptionPage;

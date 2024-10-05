import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mountains from '../assets/5d_mountain.jpg';
import beaches from '../assets/5d_beach.jpg';
import city_square  from '../assets/5d_city_square.jpg';
import hindu_temple from '../assets/5d_temple.jpg';
import museum from '../assets/5d_museum.webp';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #f0f0f0, #e2e2e2);
    min-height: 100vh;
`;

const Header = styled.h1`
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 32px;
    color: #112211;
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
`;

const AttractionImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 15px;
    margin-right: 20px;
    object-fit: cover;
`;

const AttractionDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: bold;
`;

const AttractionName = styled.h2`
    font-size: 28px;
    font-weight: bold;
    color: #8dd3bb;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;  /* Smooth transition */
    transform-origin: left center;  /* Prevents shifting on hover */

    &:hover {
        background: transparent;
        color: #112211;
        transform: scale(1.05);  /* Slight scale on hover */
    }
`;


const AttractionDescription = styled.p`
    font-size: 21px;
    color: #112211;
    margin-top: 10px;
    
`;

const Distance = styled.p`
    font-size: 28px;
    color: #112211;
    width: 210px;
    font-weight: bold;
    text-align: center;
    margin-left: 20px;
`;

const AttractionsPage = () => {
    const location = useLocation();
    const destination = location.state?.destination || 'Unknown Destination';
    const attractions = [
        {
            name: "Beach Paradise",
            description: "A beautiful beach known for its golden sands and crystal-clear waters.",
            largeDescription: "Beach Paradise is a tropical haven where golden sands meet crystal-clear waters. Visitors can enjoy sunbathing, swimming, and beach volleyball during the day. As the sun sets, the beach transforms into a magical setting, perfect for romantic walks or family gatherings. Nearby cafes offer delicious seafood and refreshing cocktails, making it a perfect spot to unwind. This beach is also famous for its vibrant marine life, and snorkeling enthusiasts can explore coral reefs just a short swim away.",
            image: beaches,
            distance: 10,
            weather: "The weather is usually warm and sunny year-round, with average temperatures ranging between 25°C to 30°C. Light breezes keep the atmosphere pleasant.",
            bestTime: "The best time to visit Beach Paradise is from November to March, when the weather is cooler and more pleasant. Avoid the monsoon season from June to September.",
            timings: {
                weekdays: "9:00 AM - 6:00 PM",
                weekends: "8:00 AM - 8:00 PM"
            },
            reviews: 4.5,
        },
        {
            name: "Mountain Vista",
            description: "A scenic mountain with panoramic views and hiking trails.",
            largeDescription: " Mountain Vista offers breathtaking panoramic views that captivate every visitor. It is a perfect destination for hiking enthusiasts, with trails catering to various skill levels. The mountain is adorned with diverse flora and fauna, and nature lovers will find themselves in a picturesque setting of fresh air and tranquility. In winter, it becomes a snowy wonderland, attracting skiers and snowboarders. Local guides offer tours that share the rich history and geology of the area, making each hike a learning experience.",
            image: mountains,
            distance: 15,
            weather: "Cool and crisp throughout the year, with snowfall during winter months. Average temperatures range between 10°C to 20°C, making it a year-round destination.",
            bestTime: "The best time to visit Mountain Vista is from April to June and September to November, when the weather is ideal for outdoor activities and sightseeing.",
            timings: {
                weekdays: "10:00 AM - 5:00 PM",
                weekends: "9:00 AM - 7:00 PM"
            },
            reviews: 4.7
        },
        {
            name: "Historic Museum",
            description: "A museum that preserves and showcases the rich cultural heritage.",
            largeDescription: "The Historic Museum showcases the rich cultural heritage of the region. With various exhibits ranging from ancient artifacts to modern art, the museum offers visitors a glimpse into the past and present. Guided tours are available, providing in-depth insights into each display. The museum also hosts workshops and events, making it an interactive experience for all ages. Visitors can spend hours exploring its galleries, learning about the region's history, art, and traditions.",
            image: museum,
            distance: 5,
            weather: "Indoor climate-controlled environment ensures a comfortable visit year-round.",
            bestTime: "Any time of the year is suitable to visit, but special exhibitions during the summer attract larger crowds.",
            timings: {
                weekdays: "9:00 AM - 5:00 PM",
                weekends: "10:00 AM - 6:00 PM"
            },
            reviews: 4.8
        },
        {
            name: "City Square",
            description: "The vibrant heart of the city, filled with shops, cafes, and entertainment.",
            largeDescription: "City Square is the vibrant heart of the city, bustling with activity and energy. It is surrounded by shops, cafes, and entertainment venues, making it a perfect spot for both locals and tourists. Street performers often entertain passersby, while local markets showcase artisanal goods. The square is also a gathering place for events and festivals throughout the year, celebrating the city's culture and diversity. Whether you're looking to shop, dine, or simply soak in the atmosphere, City Square has something for everyone.",
            image: city_square,
            distance: 2,
            weather: "Typically mild, with city weather varying by season. Check local forecasts for the best experience.",
            bestTime: "The square is lively throughout the year, but visiting during city festivals provides a unique experience.",
            timings: {
                weekdays: "10:00 AM - 10:00 PM",
                weekends: "9:00 AM - 12:00 AM"
            },
            reviews: 4.6
        },
        {
            name: "Cultural Temple",
            description: "An ancient temple known for its history and stunning architecture.",
            largeDescription: "The Cultural Temple is an ancient site known for its stunning architecture and deep spiritual significance. Visitors can explore its beautifully crafted interiors and exteriors, adorned with intricate carvings and vibrant murals. The temple hosts various cultural events and rituals that allow visitors to experience local traditions firsthand. Guided tours provide insights into the temple's history and the significance of its rituals, making it a profound experience for all who visit. The tranquil atmosphere offers a peaceful escape from the bustling city.",
            image: hindu_temple,
            distance: 7,
            weather: "The temple grounds are usually cooler due to the surrounding trees, providing a refreshing atmosphere even in warm weather.",
            bestTime: "Early morning or late afternoon visits are recommended to enjoy a quieter experience and catch the beautiful light for photography.",
            timings: {
                weekdays: "6:00 AM - 7:00 PM",
                weekends: "7:00 AM - 8:00 PM"
            },
            reviews: 4.9
        }
    ];
    const navigate = useNavigate();

    const handleAttractionClick = (attraction) => {
        // Navigate to a new page, passing the attraction details
        console.log(attraction);
        navigate('/attractions_description', { state: { attraction: attraction } });
    };

    return (
        <Container>
            <Header>Popular Attractions in {destination}</Header>
    
            {attractions.map((attraction, index) => (
                <AttractionContainer key={index}>
                    <AttractionImage src={attraction.image} alt={attraction.name} />
                    <AttractionDetails>
                        <AttractionName onClick={() => handleAttractionClick(attraction)}>
                            {attraction.name}
                        </AttractionName>
                        <AttractionDescription>
                            {attraction.description}
                        </AttractionDescription>
                    </AttractionDetails>
                    <Distance>{attraction.distance} km</Distance>
                </AttractionContainer>
            ))}
        </Container>
    );
    
};

export default AttractionsPage;

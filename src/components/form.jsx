// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bannerImage from "../assets/seaside.jpg"; // Ensure this path is correct
// eslint-disable-next-line no-unused-vars
import axios from "axios"; // Import axios for making API calls

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${bannerImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Form = styled.form`
  width: 408px; /* Decreased by 20% from 510px */
  border-radius: 16.8px; /* Decreased by 20% from 21px */
  padding: 47.2px; /* Decreased by 20% from 59px */
  box-shadow: 0 2.72px 13.6px rgba(0, 0, 0, 0.2); /* Decreased by 20% */
  background-color: rgba(255, 255, 255, 0.9);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16.8px; /* Decreased by 20% from 21px */
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6.8px; /* Decreased by 20% from 8.5px */
  font-weight: bold;
  font-size: 17.6px; /* Decreased by 20% from 22px */
  color: #112211;
`;

const Input = styled.input`
  width: 100%;
  padding: 13.6px; /* Decreased by 20% from 17px */
  border: 1px solid #ccc;
  border-radius: 5.4px; /* Decreased by 20% from 6.8px */
  box-sizing: border-box;
  background-color: transparent;
  color: #112211;
  outline: none;
  font-size: 15.6px; /* Decreased by 20% from 19.55px */
  height: 29.6px; /* Decreased by 20% from 37px */
`;

const Button = styled.button`
  background: #112211;
  border: 1.36px solid #8dd3bb; /* Decreased by 20% from 1.7px */
  border-radius: 6.8px; /* Decreased by 20% from 8.5px */
  color: #ffffff;
  font-family: "Montserrat";
  width: 100%;
  height: 38.4px; /* Decreased by 20% from 48px */
  font-weight: 600;
  font-size: 13.6px; /* Decreased by 20% from 17px */

  cursor: pointer;
  transition: background-color 0.6s ease, color 0.6s ease,
    border-color 0.6s ease, transform 0.3s ease;

  &:hover {
    background: #ffffff;
    color: #112211;
    border-color: #112211;
    transform: scale(1.05);
  }

  &:active {
    background: #004c3f;
    color: white;
    transform: scale(0.95);
    transition: transform 0.15s ease;
  }
`;

const Title = styled.h1`
  display: block;
  margin-bottom: 6.8px; /* Decreased by 20% from 8.5px */
  font-weight: bold;
  font-size: 24px; /* Decreased by 20% from 30px */
  color: #112211;
  text-align: center;
  margin-bottom: 32px; /* Decreased by 20% from 40px */
`;

const TripForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    totalDays: "",
    startDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Extract values from formData
    const { destination, totalDays, startDate } = formData;

    try {
      // Construct the URL with parameters
      // const response = await axios.get(`http://localhost:7000/attraction/getAttraction`, {
      //   params: {
      //     destination,
      //     days: totalDays,
      //     date: startDate,
      //   },
      // });
      //console.log(response);

      navigate("/attractions", { state: { destination, startDate, totalDays } }); // Pass the necessary state
    } catch (error) {
        console.error("Error fetching attractions:", error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Title>Plan your Destination!</Title>
          <Label htmlFor="destination">Destination:</Label>
          <Input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="startDate">Start Date:</Label>
          <Input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="totalDays">Total Days Planned:</Label>
          <Input
            type="number"
            id="totalDays"
            name="totalDays"
            value={formData.totalDays}
            onChange={handleChange}
            min="1"
            required
          />
        </FormGroup>
        <Button type="submit">Find</Button>
      </Form>
    </Container>
  );
};

export default TripForm;

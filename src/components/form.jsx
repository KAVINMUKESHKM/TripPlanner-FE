import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bannerImage from "../assets/5d_form_wallpaper.jpg"; // Ensure this path is correct

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
  width: 510px; /* Decreased by 15% */
  border-radius: 21px; /* Decreased by 15% */
  padding: 59px; /* Decreased by 15% */
  box-shadow: 0 3.4px 17px rgba(0, 0, 0, 0.2); /* Decreased by 15% */
  background-color: rgba(255, 255, 255, 0.9);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 21px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8.5px; /* Decreased by 15% */
  font-weight: bold;
  font-size: 22px; /* Decreased by 15% */
  color: #112211;
`;

const Input = styled.input`
  width: 100%;
  padding: 17px; /* Decreased by 15% */
  border: 1px solid #ccc;
  border-radius: 6.8px; /* Decreased by 15% */
  box-sizing: border-box;
  background-color: transparent;
  color: #112211;
  outline: none;
  font-size: 19.55px; /* Decreased by 15% */
  height: 37px; /* Decreased by 15% */
`;

const Select = styled.select`
  width: 100%;
  padding: 8.5px; /* Decreased by 15% */
  border: 1px solid #112211;
  border-radius: 6.8px; /* Decreased by 15% */
  background-color: #f9f9f9;
  color: #112211;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  font-size: 15.3px; /* Decreased by 15% */

  &:focus {
    border-color: #8bb3dd;
    box-shadow: 0 0 4.25px rgba(0, 123, 255, 0.5); /* Decreased by 15% */
  }
`;

const Button = styled.button`
  background: #112211;
  border: 1.7px solid #8dd3bb; /* Decreased by 15% */
  border-radius: 8.5px; /* Decreased by 15% */
  color: #ffffff;
  font-family: "Montserrat";
  width: 100%;
  height: 48px; /* Decreased by 15% */
  font-weight: 600;
  font-size: 17px; /* Decreased by 15% */

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
  margin-bottom: 8.5px; /* Decreased by 15% */
  font-weight: bold;
  font-size: 30px; /* Decreased by 15% */
  color: #112211;
  text-align : center;
  margin-bottom: 40px;
`;

const TripForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    totalDays: "",
    budget: "",
    category: "",
    startDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/attractions", { state: { destination: formData.destination } });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Title>Plan your Destination! </Title>
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
          <Label htmlFor="category">Category:</Label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="city">City</option>
            <option value="cultural">Cultural</option>
          </Select>
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
        <FormGroup>
          <Label htmlFor="budget">Budget:</Label>
          <Input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            min="100"
            required
          />
        </FormGroup>
        <Button type="submit">Find</Button>
      </Form>
    </Container>
  );
};

export default TripForm;

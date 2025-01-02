import React from "react";
import Details from "./components/Details";

const App = () => {
  const userdata = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      username: "johndoe123",
      age: 30,
      location: "New York, USA",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      username: "janesmith456",
      age: 28,
      location: "London, UK",
    },
    {
      id: 3,
      first_name: "Michael",
      last_name: "Johnson",
      email: "michael.johnson@example.com",
      username: "mikej789",
      age: 35,
      location: "Los Angeles, USA",
    },
    {
      id: 4,
      first_name: "Emily",
      last_name: "Davis",
      email: "emily.davis@example.com",
      username: "emilydavis321",
      age: 27,
      location: "Toronto, Canada",
    },
    {
      id: 5,
      first_name: "Daniel",
      last_name: "Martinez",
      email: "daniel.martinez@example.com",
      username: "danielmartinez555",
      age: 32,
      location: "Madrid, Spain",
    },
  ];

  return (
    <>
      <Details data={userdata}/>
    </>
  )
};

export default App;

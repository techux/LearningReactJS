import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Data recieved"+name+" "+email);
    alert("Data Recieved\n\nName : "+name+"\nEmail : "+email)
    setName("");
    setEmail("");
  };

  return (
    <>
      <h1>Learning Form Handling</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        Name : <input type="text" value={name} placeholder="Enter your name" 
        onChange={(e)=>{
          setName(e.target.value)
        }}/> <br></br>
        Email : <input type="text" value={email} placeholder="Enter your email" 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        /> <br></br>
        <button type="submit">Submit</button>
        <button type="reset"
        onClick={()=>{
          setName("");
          setEmail("");
        }}>Reset</button>
      </form>
    </>
  );
};

export default App;

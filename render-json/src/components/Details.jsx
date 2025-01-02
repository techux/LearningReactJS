import React from 'react';

const Details = (props) => {
  const users = props.data ;
  return (
    <>
      <h1>User  details :</h1>
      <div>
        {users.map((item, idx)=>{       
          return (
            <div key={idx}>
              <h2> {item.first_name} {item.last_name}</h2>
              <p>
                Age : {item.age} <br />
                Email : {item.email} <br />
                Username : {item.username} <br />
                Location : {item.location} <br /> <hr />
              </p>

            </div>
          )
        })}
      </div>
    </>
  );
};

export default Details;
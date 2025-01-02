import React from 'react'

const Details = (props) => {
  return (
    <>
        <h1>Details are visible here : </h1>
        <p>Name : {props.name}</p>
        <p>Email : {props.email}</p>
    </>
  )
}

export default Details
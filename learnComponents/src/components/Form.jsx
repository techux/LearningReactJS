import React, {useState} from 'react'

const Form = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Data rexcieved");
    console.log(name + " " +email);

    props.onFormSubmit(name, email)

    setName('')
    setEmail('')

  }

  return (
    <>
        <form onSubmit={submitHandler}>
            <label>Name : </label>
            <input type="text" name="firstName" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br/> <br />
            <label>Email : </label>
            <input type="text" name="lastName" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <br/><br />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Form
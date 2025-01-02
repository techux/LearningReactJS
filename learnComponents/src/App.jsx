import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Details from './components/Details'

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const formHandler = (name,email) => {
    setName(name)
    setEmail(email)
  }

  return (
    <>
      <Navbar/>
      <h1>Fll this form to continue...</h1>
      <Form onFormSubmit ={formHandler}/>
      <Details name={name} email={email}/>
    </>
  )
}

export default App
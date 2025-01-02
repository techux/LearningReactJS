import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {

  const [products, setProducts] = useState([])

  const fetchData = async () =>{
    const response = await axios("https://api.escuelajs.co/api/v1/products") ;
    setProducts(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  


  return (
    <>
      <h1>API Integration</h1>
      <p>Sample API Integration — <a href="https://api.escuelajs.co/api/v1/products">https://api.escuelajs.co/api/v1/products</a></p>
      {/* <p> <button onClick={fetchData}>Fetch Data</button> </p> */}
      <div>
        {products.map((item, idx)=>{
          return (
            <div key={idx}>
              <h2>{item.title}</h2>
              <p>
                <img src={item.images[0]} width="20%"/> <br />
                Price : {item.price} <br />
                Description : {item.description} <br />
                Categories : {item.category.name}
              </p> <br />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';



function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    //create function to store api response
    const fetchData = async () => {
      //variblle to
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setApiData(data);
     
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    console.log("Updated apiData:", apiData); // this will log the updated state
  }, )

  return (
    <>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item) => (
            <tr key={item.id}>
              <th>{item.username}</th>
              <th>{item.email}</th>
              <th>{item.address.street}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App

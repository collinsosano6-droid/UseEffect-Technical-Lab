import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userName, setuserName] = useState("Guest");
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    document.title = `Welcome, ${userName}`
  }, [userName]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {setuserData(data)})
    .catch(error =>console.error(`Error fetching user:`,error))
  }, [])

  useEffect(()=>{
    const handleWindowClick = ()=>{
      console.log ("Window was clicked")
    };

    //Add event listener
    window.addEventListener("click", handleWindowClick)

    //Remove event listener
    return ()=>{
      window.removeEventListener("click", handleWindowClick)
    }
  }, []);

  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) = setuserName(e.target.value)}
      />
      {userData &&(
        <div>
          <h2>User Info</h2>
          <P>Name : {userData.name}</P>
          <p>Email : {userData.email}</p>
        </div>
      ) }
    </div>
  )
}

export default App
import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [results, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000')
        .then(res => res.json())
        .then(data => setData(Array.isArray(data.message) ? data.message : []))
            .catch(err => console.log(err))
    }, []);

  const handlePost = () =>{
      const value = (document.getElementById("search") as HTMLInputElement).value
      fetch('http://localhost:3000/', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({newMessage: value}),
      })
      .then(res => res.json())
      .then(data => setData(Array.isArray(data.message) ? data.message : []))
      .catch(err => console.log(err))
  }
  const handlePut = () =>{
      const value = (document.getElementById("searchchanger") as HTMLInputElement).value
      const index = Number((document.getElementById("searchchangerindex") as HTMLInputElement).value)
      fetch('http://localhost:3000/', {
          method: 'PUT',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({newMessage: value, index}),
      })
      .then(res => res.json())
      .then(data => setData(Array.isArray(data.message) ? data.message : []))
      .catch(err => console.log(err))
  }
  const handleDelete = () =>{
      const index = Number((document.getElementById("deleteindex") as HTMLInputElement).value)
      fetch('http://localhost:3000/', {
          method: 'DELETE',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({index}),
      })
          .then(res => res.json())
          .then(data => setData(Array.isArray(data.message) ? data.message : []))
          .catch(err => console.log(err))
  }



  return (
    <>
        <div id= "searchButton">
            <input id= "search" placeholder="What to Add" />
            <button id="button1" onClick={handlePost}>Add</button>
        </div>

        <div id= "Putter">
            <input id= "searchchanger" placeholder="Change Message" />
            <input id= "searchchangerindex" placeholder=" at index" />
            <button id="button2" onClick={handlePut}>Change</button>
        </div>

        <div id="deleter">
            <input id = "deleteindex" placeholder= "Index to Delete" />
            <button id="button3" onClick={handleDelete}>Delete</button>
        </div>

        <h2>
            Current Message:
        </h2>
        <ul>
            {Array.isArray(results) && results.map((msg,index) =>
            < li key ={index}>{index}:{msg}</li>)}
        </ul>




    </>
  )
}


export default App

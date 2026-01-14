import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
    const[stringData, setStringData] = useState('')


    useEffect(()=>{
        const API_URL = "http://localhost:3000"

        fetch(API_URL)
        .then(res => {
            if(!res.ok){
                throw new Error(`HTTP error: ${res.status}`);
            }
            return res.json()
        })
            .then((data) => {
            })
        setData(data)
            })
    useEffect(() => {
        const API_URL = "http://localhost:3000"
        fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    });
  return (
    <>
        <ul>
            {data.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <div>
            <input type='text' value={stringData}
                onChange={(e) => setStringData(e.target.value)}>
            </input>
            <button type="button" value="Click Me"
            onClick={() => {
                data.push(stringData);
                setData(data)
            }}/>
        </div>


    </>
  )
}


export default App

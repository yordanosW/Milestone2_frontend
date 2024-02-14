//useState: 
//useEffect: when page loads we need to fetch food
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home() {
   const [foods, setFoods] = useState([])

   useEffect(() => {
    async function fetchData() {
        const url = `${process.env.REACT_APP_BACKEND_URL}/foods/all`
        const response = await fetch(url)
        const data  = await response.json()
        console.log(data)
        setFoods(data)
    }
    fetchData()
   },[])

   const display = foods.map(food => {
    return (
        <div key={foods.id}>

            <Link to={`/foods/${food._id}`}>{food.name}</Link>
        </div>
    )
   })
   return (
    <div>
        {display}
    </div>
   )
}

export default Home
import { useState } from "react"
import "./Grocery.css";

function Grocery() {
    const[searchTerm, setSearchTerm] = useState('')


    return(
        <div className= "form">
        <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
            <input onChange = {(e) => setSearchTerm(e.target.value)} placeholder="Search Food"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Price"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Description"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Rating"/>
            <input type="submit"/>
        </form>
        </div>
    
    )

}


export default Grocery


import { useState } from "react"

function Grocery() {
    const[searchTerm, setSearchTerm] = useState('')
    return(
        <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
            <input onChange = {(e) => setSearchTerm(e.target.value)} placeholder="Enter Item"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Enter Price"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Enter Description"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Enter Rating"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Enter Comments"/>
            <input type="submit"/>
        </form>
    )
}

export default Grocery
import { useState } from "react"

function GroceryItem(){
    const [view,setview] = useState(false)
    return (
        <div onClick ={() => setview(!view)} style={{'display': 'inline-block'}}>
            GroceryItem
        </div>
    )
}
export default GroceryItem
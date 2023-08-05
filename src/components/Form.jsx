// import { useState } from "react";

import { useState } from "react";

// export default function Form(){

//     function handleSubmit(e){
//         e.preventDefault()
//     }
//     const [item , setItem] = useState([]);

//     return(
//         <form  className="add-form ">
//             <h3>What do you need for your 😍 trip?</h3>
//             <select>
//             {Array.from({length : 20},(_,i) => i+1 ).map((num) => <option value={num} key={num}>{num}</option>) }
//             </select>
//             <input type="text" placeholder="item .." />
//             <button onSubmit={handleSubmit}>ADD</button>
//         </form>
//     )
// }

function Form ({onAddItems}){
    const [description, setDescription] = useState("")
    const[quantity,setQuantity] = useState(1);

    function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem)
    setDescription("");
    setQuantity(1);
    // here is an object submitted consisting of values of inputs' form
    console.log(newItem)
    };


    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({length:20},(_,i) => i+1).map((num) => <option value={num} key={num}>{num}</option>)}
            </select>
            <input type="text" placeholder="Item .. " value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit">add</button>
        </form>
    )
}
export default Form;
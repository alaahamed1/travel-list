import { useState } from "react";
import "../index.css"
import Logo from "./Logo";
import Form from "./Form"
import PackingList from "./PackingList"
import Stats from "./Stats"



function App(){
    // we made a state here because we can't use props from the Form to PackingList it's a separate component
    const [items, setItems] = useState([]);


    function handleAddItems(item) {
        setItems((items) => [...items, item]);
        };

    function handleToggleItem(id) {
        setItems((items) =>items.map((item) =>item.id === id ? { ...item, packed: !item.packed } : item));}

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }


    function handleClearList() {
        const confirmed = window.confirm("Are you sure you want to delete all items?");
        if (confirmed) setItems([]);
    }


    return(
        <div className="app">
            <Logo/>
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onToggleItem={handleToggleItem}  onDeleteItem={handleDeleteItem} onClearList={handleClearList}/>
            <Stats items={items}/>
        </div>
    )
};

export default App;
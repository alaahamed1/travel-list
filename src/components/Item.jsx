export default function Item({itemObj,onToggleItem,onDeleteItem}) {
    return (
        <>
            <li>
                <input type="checkbox" onClick={() => onToggleItem(itemObj.id)}/>
                <span style={itemObj.packed ? { textDecoration: "line-through"} : {}}>{itemObj.quantity}  {itemObj.description}</span>
                {/* inside the onClick event we have to insert a function to update the id of selected item each time */}
                <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
            </li>

        </>
    );
}
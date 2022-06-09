import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

function ItemListContainer({grettings, setCantCarrito}) {

    return (
        <div className="Items-Container">
            <ItemList grettings= {grettings} 
                      setCantCarrito= {setCantCarrito}/>
        </div>
    );
}

export default ItemListContainer;
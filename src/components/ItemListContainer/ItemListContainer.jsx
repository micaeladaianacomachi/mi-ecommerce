import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

function ItemListContainer({grettings, setCantCarrito}) {

    return (
        <div className="Items-Container">
            {grettings.map(item => {
                return (
                    <div key={item}>
                        {item}!
                        <ItemCount stockInicial={20} 
                                   inicial={1} 
                                   onAdd={setCantCarrito}/>
                        <br/>
                    </div>
                );
            })}
        </div>
    );
}

export default ItemListContainer;
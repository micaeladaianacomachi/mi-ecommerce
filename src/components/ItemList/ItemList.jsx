import Item from "../Item/Item";

function ItemList({grettings, setCantCarrito}) {

    return (
        grettings.map(item => {
            return (
                <Item key={item.Key}
                      item= {item}
                      setCantCarrito= {setCantCarrito}/>
            );
        })
    );
}

export default ItemList;
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({item, setCantCarrito}) {

    return (
        <div key={item.Key}
             className="Item">
            <h2>{item.Desc}</h2>
            <small>Precio: ${item.Precio}</small>
            <img key={item.Img}
                 src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                 className='img-thumbnail'
                 alt='...'
                 style={{ maxWidth: '24rem' }} />
                 <ItemCount stockInicial={item.Stock} 
                            inicial={1} 
                            onAdd={setCantCarrito}/>
            <small>El Stock Disponible es: {item.Stock}</small>
        </div>
    );
}

export default ItemDetail;
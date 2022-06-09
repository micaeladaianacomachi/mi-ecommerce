import './Item.css';
import { Button } from 'react-bootstrap';
//import ItemCount from '../ItemCount/ItemCount';

function Item({item, setCantCarrito}) {

    return (
        <div key={item.Key}
             className="Item">
            <h2>{item.Desc}</h2>
            <img key={item.Img}
                 src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                 className='img-thumbnail'
                 alt='...'
                 style={{ maxWidth: '24rem' }} />
            {/* <ItemCount stockInicial={item.Stock} 
                       inicial={1} 
                       onAdd={setCantCarrito}/> */}
            <Button className='btn-detalle-producto' 
                    variant="outline-info">
                Ver Detalle del Producto
            </Button>
            <small>El Stock Disponible es: {item.Stock}</small>
        </div>
    );
}

export default Item;
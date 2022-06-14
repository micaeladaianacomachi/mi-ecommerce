import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container, Spinner } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({setCantCarrito}) {
    const { key } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState([]);

    const getData = async(_key) => {
        setLoading(true);
        setResult([]);

        try {
            const data = await fetch("/Data/Productos.json")
            const res = new Promise((respuesta, rechazo) => {
                setTimeout(() => {
                    respuesta(data.json());
                }, 3000)
            });

            res.then((respuesta) => {
                setResult(respuesta.filter(item => _key !== undefined &&
                                                   item.Key == _key));
            }).catch((error) => {
                setError(true);
            }).finally(() => {
                setLoading(false);
            })
        } catch (error) {
        
        }
    }

    useEffect(() => {
      getData(key);
    }, [key])

    return (
        <Container>
            {
                loading ?
                <Container>
                <br/>
                <br/>
                <Spinner animation="border" role="status" variant="info">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </Container> :
                <div>
                    {
                        error ?
                        "Ocurrio un Error al Cargar Los Productos" :
                        <div className="Items-Container">
                            <div key={result[0].Key}
                                className="Item">
                                <h2>{result[0].Desc}</h2>
                                <img key={result[0].Img}
                                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                    className='img-thumbnail'
                                    alt='...'
                                    style={{ maxWidth: '24rem' }} />
                                <ItemCount stockInicial={result[0].Stock} 
                                        inicial={1} 
                                        onAdd={setCantCarrito}/>
                                <small>El Stock Disponible es: {result[0].Stock}</small>
                            </div>
                        </div>
                    }
                </div>
            }
        </Container>
        
    );
}

export default ItemDetail;
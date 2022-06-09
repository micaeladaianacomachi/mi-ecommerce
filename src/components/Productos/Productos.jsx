import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Productos(setCantCarrito) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState([]);

    const getData = async() => {
        try {
        const data = await fetch("/Data/Productos.json")
        const res = new Promise((respuesta, rechazo) => {
            setTimeout(() => {
                respuesta(data.json());
            }, 3000)
        });

        res.then((respuesta) => {
            console.log(respuesta);
            setResult(respuesta);
        }).catch((error) => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        })

        } catch (error) {
        
        }
    }

    useEffect(() => {
      getData();
    }, [])

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
                        <ItemListContainer grettings={result} 
                                        setCantCarrito={setCantCarrito} />
                    }
                </div>
            }
        </Container>
    );
}

export default Productos;
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({setCantCarrito}) {
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
                setResult(respuesta.find(item => item.Key ==_key));
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
        <Container className="Items-Container">
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
                        <ItemDetail item={ result }
                                    setCantCarrito={ setCantCarrito }/>
                    }
                </div>
            }
        </Container>
        
    );
}

export default ItemDetailContainer;
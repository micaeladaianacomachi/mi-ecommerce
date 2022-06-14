import { useEffect, useState } from "react";

function TestPromesas() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState();
    const data = [{
        Key: 1, 
        Desc:"Mukuela Viene?"
    },{
        Key: 2, 
        Desc:"Mukuela No Viene?"
    },{
        Key: 3, 
        Desc:"Mukuela Viene?"
    },{
        Key: 4, 
        Desc:"Mukuela No Viene?"
    },{
        Key: 5, Desc:"Mukuela Viene?"
    }];

    useEffect(() => {
        const pagara = new Promise((respuesta, rechazo) => {
            setTimeout(() => {
                respuesta(data);
            }, 3000);
        });

        pagara.then((respuesta) => {
            setResult(respuesta);
        }).catch((error) => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <div>
            {
                loading ?
                "Loading" :
                <div>
                    {
                        error ?
                        "There was an error inthe Payment" :
                        <ul>
                            {result && result.map(item => {
                                return (
                                    <li key={item.Key}>
                                        {item.Desc}
                                    </li>
                                );
                            })}
                        </ul>
                    }
                </div>
            }
        </div>
    );
}

export default TestPromesas;
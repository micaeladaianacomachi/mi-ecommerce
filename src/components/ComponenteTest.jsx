import {useState} from "react";
import {Button, Stack } from "react-bootstrap";
import {FaPlus, FaMinus} from "react-icons/fa";

function ComponenteTest({iniciaEn}) {
    const [contador, setContador] = useState (iniciaEn);

    return <>
    <div className="contador-container">
        <Stack direction="horizontal" gap ={3}>
        <Button variant="outline-warning" onClick ={ ()=> setContador(contadorActual => contadorActual - 1 )}>
            <FaMinus></FaMinus>
        </Button>
        <span>Contador: {contador}</span>
        <Button variant="outline-primary" onClick={()=> setContador(contadorActual =>contadorActual + 1)}>
        <FaPlus></FaPlus>
        </Button>
        </Stack>
        <br/>
        <Stack direction="horizontal">
            <Button variant="outline-danger" onClick={()=> setContador(iniciaEn)}>
                Resetear el Contador ❤
            </Button>
        </Stack>
    </div>
    </>
}

export default ComponenteTest;

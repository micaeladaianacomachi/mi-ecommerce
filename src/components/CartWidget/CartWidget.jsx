import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";

function CartWidget({cartItems}) {
    return <Button variant="outline-success"><FaShoppingCart></FaShoppingCart>{cartItems}</Button>
}

export default CartWidget;
import { createContext, useState } from "react";

export const cartContext = createContext({});

function CartContext({ children }) {
    const [itemsCarrito, setItemCarrito] = useState([]);

    function isInCart(itemKey) {
        if(itemsCarrito === undefined) {
            setItemCarrito([]);
        }

        var itemInCarrito = itemsCarrito.find(item => {
            return item.Key === itemKey;
        });

        if(itemInCarrito !== undefined) {
            var index = itemsCarrito.indexOf(itemInCarrito)
            return index;
        } else {
            console.log("El item no esta en el carrito");
            return -1;
        }
    }

    function AddItem(item, quantity) {
        var index = isInCart(item.Key);
        var array = [...itemsCarrito];
        if(index === -1) {
            array.push(item)
            setItemCarrito(array);
        } else {
            itemsCarrito[index].Quantity += quantity;
        }
    }

    function RemoveItem(itemKey) {
        var array = [...itemsCarrito];
        var index = isInCart(itemKey);
        if(index !== -1) {
            array.splice(index, 1);
            setItemCarrito(array);
        }
    }

    return ( 
        <cartContext.Provider value={ {
            cantCarrito: itemsCarrito.length,
            isInCart: isInCart,
            addItem: AddItem,
            removeItem: RemoveItem
        } }>
            {children}
        </cartContext.Provider>
    );
}

export default CartContext;
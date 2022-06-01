import './ItemListContainer.css';

function ItemListContainer({grettings}) {
    return (
        <div className="Items-Container">
            {grettings.map(item => {
                return <div key={item}>Hola {item}!</div>;
            })}
        </div>
      );
}

export default ItemListContainer;
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
                </div>

                <div className="col-md-3">
                    <h1>{producto.titulo}</h1>
                    <h2>{producto.descripcion}</h2>
                    <p><b>${producto.precio}</b></p>
                    <ItemCount stock={producto.stock} />

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
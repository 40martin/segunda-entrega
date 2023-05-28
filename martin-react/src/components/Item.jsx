const Item = ({item}) => {
    return (
        <>

            <div class="card">
                <img src={item.imagen} class="card-img-top" alt={item.titulo} />
                <div class="card-body">
                    <h3>{item.titulo}</h3>
                    <p class="card-text">{item.descripcion}</p>
                </div>
            </div>
        
        
        </>

    )
}

export default Item;
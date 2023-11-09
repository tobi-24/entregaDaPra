import 'bulma/css/bulma.min.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className='subtitle is-2'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
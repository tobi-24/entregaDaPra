import cart from "./assets/cart-img.png";
import 'bulma/css/bulma.min.css';
import '../../css/style.css'

const CartWidget = () => {
    return (
        <div className="image is-32x32 cart">
            0
            <img src={cart} alt="cart-widget"/>
        </div>
    )
}

export default CartWidget
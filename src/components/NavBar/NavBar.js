import CartWidget from "../CartWidget/CartWidget";
import 'bulma/css/bulma.min.css';
import '../../css/style.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3 className="title is-2">E-Make up</h3>
            <div className="columns field has-addons">
                <button className="button is-primary is-normal">Home</button>
                <button className="button is-dark is-normal fas fa-align-center">Rimmel</button>
                <button className="button is-dark is-normal fas fa-align-center">Lipstick</button>
                <button className="button is-dark is-normal fas fa-align-center">Sunscreens</button>
                <button className="button is-dark is-normal fas fa-align-center">Perfumes</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar
import CartWidget from "../CartWidget/CartWidget"; 

const NavBar = () => {
    return (
        <nav>
            <h3>E-Make up</h3>
            <div>
                <ul>
                    <button>Home</button>
                    <button>Rimmel</button>
                    <button>Lipstick</button>
                    <button>Sunscreens</button>
                    <button>Perfumes</button>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar
import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="wave-effect">
                <div className="logo">
                    <h4>The Nav</h4>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <div className="cart">
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <div className="cart-icon">
                        <a href="#">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="notification"> Cart 0</span>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;

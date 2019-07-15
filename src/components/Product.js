import React from 'react';
import ProductSelection from './ProductSelection';
import productImage from './../img/matebook.png';

class Product extends React.Component {
    render() {
        return (
            <section className="presentation">
                <div className="introduction">
                    <div className="intro-text">
                        <h1>Laptop for the future</h1>
                        <p>
                            The new 14 inch bezeless display oferring a 4k
                            display with touch screen.
                        </p>
                        <div className="rating">
                            <span>Rate:</span>
                            <ul className="rating-star">
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star-o"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="cta">
                        <div className="cta-select">
                            <div className="cta-select-quantity">
                                <span>1</span>
                            </div>
                            <div className="cta-select-edit-quantity">
                                <span className="fa fa-plus wave-effect"></span>
                                <span className="fa fa-minus wave-effect"></span>
                            </div>
                        </div>
                        <button className="cta-add wave-effect">Add To Cart</button>
                    </div>
                </div>
                <div className="cover">
                    <img src={productImage} alt="matebook" />
                    <ProductSelection />
                </div>
            </section>
        );
    }
}

export default Product;

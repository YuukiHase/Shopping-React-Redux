import React from 'react';
import ProductSelection from './ProductSelection';
import productImage from './../img/matebook.png';

class Product extends React.Component {
    render() {
        return (
            <div>
                <section className="presentation">
                    <div className="introduction">
                        <div className="intro-text">
                            <h1>Laptop for the future</h1>
                            <p>
                                The new 14 inch bezeless display oferring a 4k
                                display with touch screen.
                        </p>
                        </div>
                        <div className="cta">
                            <button className="cta-select wave-effect">14 Inch</button>
                            <button className="cta-add wave-effect">Add To Cart</button>
                        </div>
                    </div>
                    <div className="cover">
                        <img src={productImage} alt="matebook" />
                        <ProductSelection />
                    </div>
                </section>
            </div>
        );
    }
}

export default Product;

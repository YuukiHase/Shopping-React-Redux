import React from 'react';
import arrowLeft from './../img/arrow-left.svg';
import dot from './../img/dot.svg';
import dotFull from './../img/dot-full.svg';
import arrowRight from './../img/arrow-right.svg';

class ProductSelection extends React.Component {
    render() {
        return (
            <div className="product-select">
                <img src={arrowLeft} alt="arrow" />
                <img src={dot} alt="dot" />
                <img src={dotFull} alt="dot" />
                <img src={dotFull} alt="dot" />
                <img src={arrowRight} alt="arrow" />
            </div>
        );
    }
}

export default ProductSelection;

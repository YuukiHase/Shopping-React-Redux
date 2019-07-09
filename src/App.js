import React from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                <Product />
            </div>
        );
    }
}

export default App;

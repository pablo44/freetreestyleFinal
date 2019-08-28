import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'from react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Navbar/index';
import StartPAge from '../StartPge/index';
import Gallery from '../Gallery/index';
import Cooperators from '../Cooperators/index';
import OrderFurniture from '../OrderFurniture/index';
import ShoppingCart from '../ShoppingCart/index';
import Footer from '../Footer/index';
import MissingPage from '../MissingPage'

export default function() {
    return (
        <Router>
            <div className="App body">
                <Navbar />
                <main>
                    <Switch>
                        <Route path="/startpage" component={StartPage} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/cooperators" component={Cooperators} />
                        <Route path="/orderfurniture" component={OrderFurniture} />
                        <Route path="/shoppingcart" component={ShoppingCart} />
                        <Route component={MissingPage} />

                    </Switch>
                </main>
                <Footer />
            </div>

        </Router>
    );
};

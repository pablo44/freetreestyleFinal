import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Navbar/index';
import StartPage from '../StartPage/index';
import Gallery from '../Gallery/index';
import Cooperators from '../Cooperators/index';
import OrderFurniture from '../OrderFurniture/index';
import ShoppingCart from '../ShoppingCart/index';
import Footer from '../Footer/index';
import MarzenaPage from '../MarzenaPage/index';
import PaulPage from '../PaulPage/index';
import MissingPage from '../MissingPage';

 function Template () {
    return (
        <Router>
            <div className="App body">
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path="/" component={StartPage} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/cooperators" component={Cooperators} />
                        <Route path="/orderfurniture" component={OrderFurniture} />
                        <Route path="/shoppingcart" component={ShoppingCart} />
                        <Route path="/marzenapage" component={MarzenaPage} />
                        <Route path="/paulpage" component={PaulPage} />
                        <Route component={MissingPage} />

                    </Switch>
                </main>
                <Footer />
            </div>

        </Router>
    );
}
export default Template;
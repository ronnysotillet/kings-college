import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/home';
import ContactUS from '../pages/contactUS';
import Gallery from '../pages/gallery';
import Us from '../pages/us';
import Join from '../pages/join';
import NotFound from '../pages/notFound';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contactus" component={ContactUS} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/us" component={Us} />
                        <Route exact path="/join" component={Join} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </HashRouter>
        );
    }
}
export default App;
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Catalog } from './pages';
import Header from './components/layout/header'
import Sidebar  from './components/layout/sidebar'

import 'normalize.css'
import './index.css'

const App =() => {
    return (
        <section>
            <Header></Header>
            <Sidebar></Sidebar>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route
                    path="/catalog" component={Catalog} exact
                />
            </Switch>
        </section>
    );
}

export default App;
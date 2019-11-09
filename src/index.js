import React from 'react';
import {render} from 'react-dom';
import "!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

render(
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
        <Switch>
            <Route exact path="/">
                Hello, world!
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('App')
);
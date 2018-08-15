import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BooksApp from './BooksApp'
import './index.css'

ReactDOM.render(
    /* Wraps up the entire app in BrowserRouter : This sets up the router which listen to url,
     notifies all the components when url changes*/
    <BrowserRouter>
        <BooksApp />
    </BrowserRouter>,
    document.getElementById('root')
);

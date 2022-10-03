import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterBroser } from 'react-router-fast-rx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterBroser AppComponent={ App } />
);


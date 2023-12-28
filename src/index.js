import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { StateProvider } from './StateProvider';
import  { initialState } from './reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialState} >
        <App />
      </StateProvider>
    </Router>
   
  </React.StrictMode>
);


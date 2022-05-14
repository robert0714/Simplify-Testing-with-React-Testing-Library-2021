import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 



/* 
Comment out the next 3 links 
when you want to use the real API
*/
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

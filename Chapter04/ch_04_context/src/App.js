import React from 'react';
import Vote from './Vote'; 
import ProductList from './ProductList'; 
import retailProducts from './api/retailProducts'
import Retail from './Retail'
import { RetailProvider } from './RetailContext'
import { LikesProvider } from './LikesContext'
//const App = () => <h1>Replace me with chapter related components </h1>; 

// const App = () => (
// <LikesProvider initialLikes={10}>
//     <Vote />
// </LikesProvider>
// )

const App = () => (
    <RetailProvider products={retailProducts}>
        <Retail />
    </RetailProvider>    
    )
export default App;

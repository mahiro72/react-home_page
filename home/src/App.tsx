import React from 'react';
import './App.css';


import Header from './Header/Header';
import Main from './Main/Main';
import Title from './Titile/Title';
import Products from './Products/Products';
import SNS from './SNS/SNS';


function App() {
  return (
    <div className="App">
      
      <Header />
      <Title />
      <Main />
      <SNS/>
      <Products />
      

    </div>
  );
}

export default App;

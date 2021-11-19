import React from 'react';
import './App.css';


import Header from './Header/Header';
import Main from './Main/Main';
import Title from './Titile/Title';
import Products from './Products/Products';
import SNS from './SNS/SNS';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      
      <Header />
      <Title />
      <Main />
      
      <Products />
      <SNS/>

      <Footer />
      

    </div>
  );
}

export default App;

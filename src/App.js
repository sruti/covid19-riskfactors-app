import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainContainer from './Containers/MainContainer';
import Footer from './Components/Footer';

function App() {
  return (
    <section className="App">
      <Header />
      <MainContainer />
      <Footer />
    </section>
  );
}

export default App;

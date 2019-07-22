import React from 'react';
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import RecipeContainer from './components/RecipeContainer'
import Logo from './components/Logo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <RecipeContainer />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Main />
        <br />
        <Footer />
      </div>
    </div>
  )
}

export default App;

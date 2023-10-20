import { useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {

  let targetScrollRef = useRef()
  
  function scrollHandler(){
    targetScrollRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <div>
      <Header scrollHandler={scrollHandler}/>
      <Footer ref={targetScrollRef}/>
      <ProductList/>
    </div>
  );
}

export default App;

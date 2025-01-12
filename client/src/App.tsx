import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/pages/Home';
import About from './views/pages/About';
import Blog from './views/pages/Blog';
import Gallery from './views/pages/Gallery';
import Order from './views/pages/Order';
import Products from './views/pages/Products';
import Support from './views/pages/Support';
import { NotFound } from './views/NotFound';

const App = () => {

  return (
    <> 
      <Routes>
        <Route path={"/"} element={<Home />}/>
        
        <Route path={"/about"} element={<About />}/>
        
        <Route path={"/gallery"} element={<Gallery />}/>
        
        <Route path={"/products"} element={<Products />}/>
        
        <Route path={"/order"} element={<Order />}/>
        
        <Route path={"/support"} element={<Support />}/>
        
        <Route path={"/blog"} element={<Blog />}/>
        
        {/* Catch wildcard route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

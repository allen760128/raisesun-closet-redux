import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Firstpage from './firstpage';
import './reset.css';
import { Provider } from 'react-redux';
import Store from './store';
import P2 from './p2';
import Test from './test';
import Pants from './pants';
import Pantspropage from './pants/pantsProPage';
import D from './pants/ddd';
import Signpage from './signpage/signIn';
import SigninData from './signpage/signinData';
import Forloop from './forloop';
import Array from './array';

const App = () => {
  // const cartValue = useSelector(state => state.product.cartValue);
  // const Id = cartValue.id;
  return (
    <Provider store={Store}>
      <HashRouter>
        <Routes>
          <Route path='/' exact element={<Firstpage />}></Route>
          <Route path='/p2' element={<P2 />}></Route>
          <Route path='/pants' element={<Pants />}></Route>
          <Route path='pants/pantspropage:id' element={<Pantspropage />}></Route>
          <Route path='/signin' element={<Signpage />}></Route>
          <Route path='/signindata' element={<SigninData />}></Route>
          <Route path='/test:id' element={<Test />}></Route>
          <Route path='/forloop' element={<Forloop />}></Route>
          <Route path='/array' element={<Array />}></Route>
          <Route path='/ddd' element={<D />}></Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;

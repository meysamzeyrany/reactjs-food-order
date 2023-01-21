import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCardIsShown] = useState(false);

  function showCartHandler() {
    setCardIsShown(true);
  }

  function hideCartHandler() {
    setCardIsShown(false);
  }

  return (
    <CartProvider>
      <Cart />
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

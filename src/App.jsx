import { useState } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Cart from './components/Cart';
import './App.css'

function App() {
  
  return (
    <>
      <Provider store={store}>
        <Cart />
      </Provider>
      
    </>
  )
}

export default App

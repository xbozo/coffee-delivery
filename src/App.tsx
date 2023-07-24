import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CartContextProvider } from './contexts/CartContext';
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <CartContextProvider>
        <Router /> 
      </CartContextProvider>
    </BrowserRouter>
  )
}
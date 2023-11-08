import { RouterList } from './Router';
import { CartContextProvider } from './contexts/CartContext';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <CartContextProvider>
        <RouterList />
      </CartContextProvider>
    </>
  );
}

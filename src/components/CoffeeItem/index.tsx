import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import Cubano from '../../assets/Type=Cubano.svg';
import * as C from "./styles";


export function CoffeeItem() {
    return (
        <>
         <C.MainContainer>
            <C.CoffeeContainer>
                <img src={Cubano} className='coffee-image' />
                <div className='tags-container'>
                    <span className='tags'>Especial</span>
                    <span className='tags'>Alcoólico</span>
                    <span className='tags'>Gelado</span>
                </div>
                <h2 className='coffee-name'>Chocolate Quente</h2>
                <p className='description'>Drink gelado de café expresso com rum, creme de leite e hortelã</p>

                <C.BuyContainer>
                    <div className='coffee-price-container'>
                        <span className='coffee-real-coin'>R$</span>
                        <span className='coffee-price'>9,90</span>
                    </div>

                    <C.BuyActionsContainer>
                        <div className='buy-counter'>
                            <button>
                                <Minus size={15} weight="bold" />
                            </button>
                            <span>1</span>
                            <button>
                                <Plus size={15} weight="bold" />
                            </button>
                        </div>
                        <button className="cart-icon-container">
                            <ShoppingCartSimple size={22} weight="fill" className='cart-icon' />
                        </button>
                    </C.BuyActionsContainer>
                </C.BuyContainer>
            </C.CoffeeContainer>
        </C.MainContainer>
        
        </>
       
        

    )
}
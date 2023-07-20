import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { formatMoney } from "../../utils/formatMoney";
import * as C from "./styles";


export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeProps) {
    const formattedPrice = formatMoney(coffee.price)

    return (
        <>
         <C.MainContainer>
            <C.CoffeeContainer>
                <img src={`/coffees/${coffee.photo}`} className='coffee-image' />

                <div className='tags-container'>
                    {coffee.tags.map(tag => (
                        <span key={`${coffee.id}${tag}`} className='tags'>{tag}</span>
                    ))}
                </div>
                <h2 className='coffee-name'>{coffee.name}</h2>
                <p className='description'>{coffee.description}</p>

                <C.BuyContainer>
                    <div className='coffee-price-container'>
                        <span className='coffee-real-coin'>R$</span>
                        <span className='coffee-price'>{formattedPrice}</span>
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
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formatMoney";
import { QuantityInput } from "./partials/QuantityInput";
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
    const [quantity, setQuantity] = useState(1)
    
    const { addCoffeeToCart } = useCart()
    
    function handleIncrease() {
        setQuantity((state) => state + 1)
    }

    function handleDecrease() {
        setQuantity((state) => state - 1)
    }

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeeToAdd)
    }

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
                        <QuantityInput 
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={quantity}
                        />

                        <button className="cart-icon-container" onClick={handleAddToCart}>
                            <ShoppingCartSimple size={22} weight="fill" className='cart-icon' />
                        </button>
                    </C.BuyActionsContainer>
                </C.BuyContainer>
            </C.CoffeeContainer>
        </C.MainContainer>
        
        </>
       
        

    )
}
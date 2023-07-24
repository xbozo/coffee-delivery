import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../../components/CoffeeItem/partials/QuantityInput";
import { CartItem } from "../../../../../contexts/CartContext";
import { useCart } from "../../../../../hooks/useCart";
import { formatMoney } from "../../../../../utils/formatMoney";
import * as C from "./styles";


interface CoffeeCardProps {
    coffee: CartItem
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart()

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, 'increase')
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, 'decrease')
    }

    function handleRemove() {
        removeCartItem(coffee.id)
    }

    const coffeeTotal = coffee.price * coffee.quantity

    const formattedPrice = formatMoney(coffeeTotal)

    return (
        <C.CoffeeCardContainer>
            <C.CoffeeContainer>
                <img src={`/public/coffees/${coffee.photo}`} />
                <C.CoffeeDetails>
                    <div className="coffee-name">{coffee.name}</div>
                    <C.CoffeeButtons>
                        <QuantityInput 
                            quantity={coffee.quantity} 
                            onIncrease={handleIncrease} 
                            onDecrease={handleDecrease} 
                        />

                        <button className="remove-item" onClick={handleRemove}>
                            <Trash size={16} weight="regular" />
                            <span>Remover</span>
                        </button>
                    </C.CoffeeButtons>
                </C.CoffeeDetails>
            </C.CoffeeContainer>

            <C.CoffeePriceContainer>
                <span>R$ {formattedPrice}</span>
            </C.CoffeePriceContainer>

        </C.CoffeeCardContainer>
    )
}
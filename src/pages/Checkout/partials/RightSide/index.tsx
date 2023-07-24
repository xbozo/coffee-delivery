import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { CoffeeCard } from "./CoffeeCard";
import * as C from "./styles";

const DELIVERY_PRICE = 3.5


export function RightSide() {
    const { cartItems, cartItemsTotal, cartQuantity } = useCart()
    const cartTotal = DELIVERY_PRICE + cartItemsTotal

    const formattedItemsTotal = formatMoney(cartItemsTotal)
    const formattedCartTotal = formatMoney(cartTotal)
    const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

    return (
        <C.RightSideContainer>
            <C.TitleContainer>
                Cafés selecionados
            </C.TitleContainer>

            <C.RightContent>
                <C.CoffeeCardContainer>
                    {cartItems.map(item => (
                        <CoffeeCard key={item.id} coffee={item} />
                    ))}
                </C.CoffeeCardContainer>

                <C.PriceInfo>
                    <div>
                        <span>Total de itens</span>
                        <span>R$ {formattedItemsTotal}</span>
                    </div>

                    <div>
                        <span>Entrega</span>
                        <span>R$ {formatDeliveryPrice}</span>
                    </div>

                    <div>
                        <span>Total</span>
                        <span>R$ {formattedCartTotal}</span>
                    </div>
                </C.PriceInfo>

                <button 
                    className="confirm-order" 
                    disabled={cartQuantity <= 0}
                >
                    Confirmar Pedido
                </button>
            </C.RightContent>
        </C.RightSideContainer>
    )
}
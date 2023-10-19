import { SubmitHandler, useFormContext } from 'react-hook-form';
import { OrderData } from '..';
import { CoffeeCard } from '../../../components/CoffeeCard';
import { useCart } from '../../../hooks/useCart';
import { formatMoney } from '../../../utils/formatMoney';
import * as C from './styles';

const DELIVERY_PRICE = 3.5;

export function SelectedCoffees() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE);

  const { handleSubmit, setError } = useFormContext();

  const onSubmit: SubmitHandler<OrderData> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      setError('campo', {
        type: 'manual',
        message: 'ZodError',
      });
    }

    // e.preventDefault();
  };

  return (
    <C.RightSideContainer>
      <C.TitleContainer>Cafés selecionados</C.TitleContainer>

      <C.RightContent>
        <C.CoffeeCardContainer>
          {cartItems.map((item) => (
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            className="confirm-order"
            disabled={cartQuantity <= 0}
            type="submit"
          >
            Confirmar Pedido
          </button>
        </form>
      </C.RightContent>
    </C.RightSideContainer>
  );
}

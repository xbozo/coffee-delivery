import { useNavigate } from 'react-router-dom';
import { OrderData } from '../../@types/schemas/confirmOrderForm';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FORM_STORAGE_KEY } from '../Checkout';

export const ConfirmedOrder = () => {
  const { getItem } = useLocalStorage<OrderData>(FORM_STORAGE_KEY);
  const data: OrderData | null = getItem();

  const navigate = useNavigate();

  if (!data) {
    navigate('/');
    return <></>;
  }

  const { rua, numero, bairro, cidade, uf } = data;

  return (
    <div>
      <span>{rua}</span>
      <span>{numero}</span>
    </div>
  );
};

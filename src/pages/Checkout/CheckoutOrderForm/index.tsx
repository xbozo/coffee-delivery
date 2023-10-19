import { InfoModel } from '../../../components/InfoModel';

import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import * as C from './styles';

import { CreditCard, Money } from '@phosphor-icons/react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export function CheckoutOrderForm() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const { register } = useFormContext();

  return (
    <C.CheckoutOrderContainer>
      <C.TitleContainer>Complete seu pedido</C.TitleContainer>

      <C.OrderAddressInfoContainer>
        <InfoModel
          title="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
          icon={
            <MapPinLine size={25} color="var(--yellow-dark)" weight="light" />
          }
        />

        <C.OrderInputForm>
          <input
            type="text"
            placeholder="CEP"
            className="cep"
            {...register('cep')}
          />
          <input
            type="text"
            placeholder="Rua"
            className="rua"
            {...register('rua')}
          />
          <input
            placeholder="Número"
            className="numero"
            {...register('numero')}
          />
          <div className="complemento">
            <input
              type="text"
              placeholder="Complemento"
              {...register('complemento')}
            />
            <span>Opcional</span>
          </div>
          <input
            type="text"
            placeholder="Bairro"
            className="bairro"
            {...register('bairro')}
          />
          <input
            type="text"
            placeholder="Cidade"
            className="cidade"
            {...register('cidade')}
          />
          <input
            type="text"
            placeholder="UF"
            className="uf"
            {...register('uf')}
          />
        </C.OrderInputForm>
      </C.OrderAddressInfoContainer>

      <C.PaymentMethodContainer>
        <InfoModel
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={
            <CurrencyDollar size={25} weight="light" color="var(--purple)" />
          }
        />

        <C.PaymentMethodOptions>
          <C.PaymentMethodOption
            onFocus={() => setSelectedPayment('Cartão de Crédito')}
          >
            <CreditCard size={20} />
            <label>Cartão de Crédito</label>
          </C.PaymentMethodOption>

          <C.PaymentMethodOption
            onFocus={() => setSelectedPayment('Cartão de Débito')}
          >
            <CreditCard size={20} />
            <label>Cartão de Débito</label>
          </C.PaymentMethodOption>

          <C.PaymentMethodOption onFocus={() => setSelectedPayment('Dinheiro')}>
            <Money size={20} />
            <label>Dinheiro</label>
          </C.PaymentMethodOption>
        </C.PaymentMethodOptions>
      </C.PaymentMethodContainer>
    </C.CheckoutOrderContainer>
  );
}

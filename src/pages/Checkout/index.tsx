import { Header } from '../../components/Header';
import { CheckoutOrderForm } from './CheckoutOrderForm';
import { SelectedCoffees } from './SelectedCoffees';

import * as C from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormSchema = z.object({
  cep: z.string().max(9, 'Informe o CEP'),
  rua: z.string().min(1, 'Informe a Rua'),
  numero: z.number().max(4),
  complemento: z.string().optional(),
  bairro: z.string().min(1, 'Informe o Bairro'),
  cidade: z.string().min(1, 'Informe a Cidade'),
  uf: z.string().max(2, 'Informe a UF'),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    },
  }),
});

export type OrderData = z.infer<typeof confirmOrderFormSchema>;

export function Checkout() {
  const methods = useForm({
    resolver: zodResolver(confirmOrderFormSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  return (
    <>
      <Header city="Porto Alegre" geoState="RS" />
      <FormProvider {...methods}>
        <C.Container>
          <CheckoutOrderForm />
          <SelectedCoffees />
        </C.Container>
      </FormProvider>
    </>
  );
}

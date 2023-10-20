import * as z from 'zod';

export enum PaymentMethodOptions {
  Credit = 'credit',
  Debit = 'debit',
  Cash = 'cash',
}

export const confirmOrderFormSchema = z.object({
  cep: z.string().min(8, 'Informe o CEP'),
  rua: z.string().min(1, 'Informe a Rua'),
  numero: z
    .number({ invalid_type_error: 'Informe o Número' })
    .min(1, 'Informe o Número'),
  complemento: z.string().optional(),
  bairro: z.string().min(1, 'Informe o Bairro'),
  cidade: z.string().min(1, 'Informe a Cidade'),
  uf: z.string().min(2, 'Informe a UF').max(2, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Preencha a forma de pagamento',
  }),
});

export type OrderData = z.infer<typeof confirmOrderFormSchema>;

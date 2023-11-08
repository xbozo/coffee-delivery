/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { OrderData, confirmOrderFormSchema } from '../../@types/schemas/confirmOrderForm'

import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { formatMoney } from '../../utils/formatMoney'

import { CoffeeCard } from '../../components/CoffeeCard'
import { Header } from '../../components/Header'
import { InfoModel } from '../../components/InfoModel'

import { CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import * as C from './styles'

const DELIVERY_PRICE = 3.5

export const FORM_STORAGE_KEY = 'form'

export function Checkout() {
	const [currentPaymentMethod, setCurrentPaymentMethod] = useState<
		'credit' | 'debit' | 'cash' | undefined
	>(undefined)

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<OrderData>({
		resolver: zodResolver(confirmOrderFormSchema),
		defaultValues: {
			paymentMethod: undefined,
		},
	})

	const { getItem, setItem, removeItem } = useLocalStorage(FORM_STORAGE_KEY)

	const { cartItems, cartItemsTotal, cartQuantity } = useCart()
	const cartTotal = DELIVERY_PRICE + cartItemsTotal

	const formattedCartTotal = formatMoney(cartTotal)
	const formattedItemsTotal = formatMoney(cartItemsTotal)
	const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

	const navigate = useNavigate()

	const handleFormSubmit: SubmitHandler<OrderData> = (data) => {
		const existingData = getItem()

		if (existingData) {
			removeItem()
		}

		setItem(data)
		navigate('/confirmedorder')
	}

	const handlePaymentChange = (paymentType: 'credit' | 'debit' | 'cash') => {
		setValue('paymentMethod', paymentType)
		setCurrentPaymentMethod(paymentType)
	}

	return (
		<>
			<Header
				city="Porto Alegre"
				geoState="RS"
			/>
			<C.Container>
				<C.CheckoutOrderContainer>
					<C.TitleContainer>Complete seu pedido</C.TitleContainer>

					<C.OrderAddressInfoContainer>
						<InfoModel
							title="Endereço de Entrega"
							description="Informe o endereço onde deseja receber seu pedido"
							icon={
								<MapPinLine
									size={25}
									color="var(--yellow-dark)"
									weight="light"
								/>
							}
						/>

						<C.OrderInputForm>
							<C.InputWrapper className="cep">
								<input
									type="text"
									placeholder="CEP"
									{...register('cep')}
								/>
								{errors.cep && <p>{errors.cep.message as string}</p>}
							</C.InputWrapper>

							<C.InputWrapper className="rua">
								<input
									type="text"
									placeholder="Rua"
									{...register('rua')}
								/>
								{errors.rua && <p>{errors.rua.message}</p>}
							</C.InputWrapper>

							<C.InputWrapper className="numero">
								<input
									type="number"
									placeholder="Número"
									{...register('numero', { valueAsNumber: true })}
								/>
								{errors.numero && <p>{errors.numero.message}</p>}
							</C.InputWrapper>

							<div className="complemento">
								<input
									type="text"
									placeholder="Complemento"
									{...register('complemento')}
								/>
								<span>Opcional</span>
							</div>

							<C.InputWrapper className="bairro">
								<input
									type="text"
									placeholder="Bairro"
									{...register('bairro')}
								/>
								{errors.bairro && <p>{errors.bairro.message}</p>}
							</C.InputWrapper>

							<C.InputWrapper className="cidade">
								<input
									type="text"
									placeholder="Cidade"
									{...register('cidade')}
								/>
								{errors.cidade && <p>{errors.cidade.message}</p>}
							</C.InputWrapper>

							<C.InputWrapper className="uf">
								<input
									type="text"
									placeholder="UF"
									{...register('uf')}
								/>
								{errors.uf && <p>{errors.uf.message}</p>}
							</C.InputWrapper>
						</C.OrderInputForm>
					</C.OrderAddressInfoContainer>

					<C.PaymentMethodContainer>
						<InfoModel
							title="Pagamento"
							description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
							icon={
								<CurrencyDollar
									size={25}
									weight="light"
									color="var(--purple)"
								/>
							}
						/>

						<C.PaymentMethodOptions>
							<C.PaymentMethodOption
								onClick={() => handlePaymentChange('credit')}
								style={
									currentPaymentMethod === 'credit'
										? { border: '1px solid var(--purple)' }
										: { border: 'none' }
								}
							>
								<input
									type="radio"
									{...register('paymentMethod')}
									value={'credit'}
								/>

								<CreditCard size={20} />
								<label htmlFor="credit">Cartão de Crédito</label>
							</C.PaymentMethodOption>

							<C.PaymentMethodOption
								onClick={() => handlePaymentChange('debit')}
								style={
									currentPaymentMethod === 'debit'
										? { border: '1px solid var(--purple)' }
										: { border: 'none' }
								}
							>
								<input
									type="radio"
									{...register('paymentMethod')}
									value={'debit'}
								/>
								<CreditCard size={20} />
								<label htmlFor="debit">Cartão de Débito</label>
							</C.PaymentMethodOption>

							<C.PaymentMethodOption
								onClick={() => handlePaymentChange('cash')}
								style={
									currentPaymentMethod === 'cash'
										? { border: '1px solid var(--purple)' }
										: { border: 'none' }
								}
							>
								<input
									type="radio"
									{...register('paymentMethod')}
									value={'cash'}
								/>

								<Money size={20} />
								<label htmlFor="cash">Dinheiro</label>
							</C.PaymentMethodOption>
						</C.PaymentMethodOptions>
						{errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
					</C.PaymentMethodContainer>
				</C.CheckoutOrderContainer>

				<section>
					<C.RTitleContainer>Cafés selecionados</C.RTitleContainer>

					<C.RightContent>
						<C.CoffeeCardContainer>
							{cartItems.map((item) => (
								<CoffeeCard
									key={item.id}
									coffee={item}
								/>
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
							type="submit"
							onClick={handleSubmit(handleFormSubmit)}
						>
							Confirmar Pedido
						</button>
					</C.RightContent>
				</section>
			</C.Container>
		</>
	)
}

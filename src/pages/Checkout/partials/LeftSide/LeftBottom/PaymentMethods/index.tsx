import { CreditCard } from "phosphor-react";
import * as C from "./styles";


export function PaymentMethods() {
    return (
        <C.PaymentMethodsContainer>
            <CreditCard size={20} />
            <span>Cartão de Crédito</span>
        </C.PaymentMethodsContainer>
    )
}
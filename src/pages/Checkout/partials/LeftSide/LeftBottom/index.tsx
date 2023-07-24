import { CurrencyDollar } from "phosphor-react";
import { LeftInfo } from "../LeftInfoModel";
import { PaymentMethods } from "./PaymentMethods";
import * as C from "./styles";


export function LeftBottom() {
    return (
        <C.LeftBottom>
            <LeftInfo 
                title="Pagamento"
                description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                icon={<CurrencyDollar size={25} weight="light" color="var(--purple)" />}
            />

            <C.PaymentMethodOptions>
                <PaymentMethods />
                <PaymentMethods />
                <PaymentMethods />
            </C.PaymentMethodOptions>
        </C.LeftBottom>
    )
}
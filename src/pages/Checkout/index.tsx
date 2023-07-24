import { Header } from "../../components/Header";
import { LeftSide } from "./partials/LeftSide";
import { RightSide } from "./partials/RightSide";

import * as C from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";


const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string(),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData


export function Checkout() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
    })

    const { handleSubmit } = confirmOrderForm

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        console.log(data)
    }

    return (
        <>
            <Header city="Porto Alegre" geoState="RS" />
            <FormProvider {...confirmOrderForm}>
                <C.Container>
                    <LeftSide onSubmit={handleSubmit(handleConfirmOrder)} />
                    <RightSide />
                </C.Container>
            </FormProvider>

        </>

    )
}
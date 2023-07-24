import { FormEvent } from "react";
import { LeftBottom } from "./LeftBottom";
import { LeftTop } from "./LeftTop";

import * as C from "./styles";


interface LeftSidePropsType {
    onSubmit: FormEvent
}

export function LeftSide({ onSubmit }: LeftSidePropsType) {
    return (
        <C.LeftSideContainer>
            <C.TitleContainer>
            Complete seu pedido
            </C.TitleContainer>
            
            <LeftTop onSubmit={onSubmit} />
            <LeftBottom />
        </C.LeftSideContainer>
    )
}
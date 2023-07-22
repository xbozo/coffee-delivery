import { LeftBottom } from "./LeftBottom";
import { LeftTop } from "./LeftTop";

import * as C from "./styles";


export function LeftSide() {
    return (
        <C.LeftSideContainer>
            <C.TitleContainer>
            Complete seu pedido
            </C.TitleContainer>
            
            <LeftTop />
            <LeftBottom />
        </C.LeftSideContainer>
    )
}
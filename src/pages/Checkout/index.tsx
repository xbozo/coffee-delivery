import { Header } from "../../components/Header";
import { LeftSide } from "./partials/LeftSize";
import { RightSide } from "./partials/RightSide";

import * as C from "./styles";


export function Checkout() {
    return (
        <>
            <Header city="Porto Alegre" geoState="RS" />
            <C.Container>
                <LeftSide />
                <RightSide />
            </C.Container>
        </>

    )
}
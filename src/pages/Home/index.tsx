import { CoffeeItem } from "../../components/CoffeeItem";
import { Header } from "../../components/Header";
import { Intro } from "./components/Intro";

import * as C from "./styles";

export function Home() {
    return (
        <C.Container>
            <Header city="Porto Alegre" geoState="RS" />
            <Intro />
            
            <C.TitleWrapper>
                <h2>Nossos cafés</h2> 
            </C.TitleWrapper>
            <C.CoffeeItemContainer>
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
            </C.CoffeeItemContainer>
        </C.Container>
    )
}
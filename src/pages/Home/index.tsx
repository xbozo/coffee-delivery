import { CoffeeItem } from "../../components/CoffeeItem";
import { Header } from "../../components/Header";
import { Intro } from "./partials/Intro";

import { coffees } from "../../data/coffees";

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
                {coffees.map((coffee) => (
                    <CoffeeItem key={coffee.id} coffee={coffee}/>
                ))}
            </C.CoffeeItemContainer>
        </C.Container>
    )
}
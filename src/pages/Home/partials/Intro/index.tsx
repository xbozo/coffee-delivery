import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import CoffeeIntro from "../../../../assets/images/CoffeeIntro.svg";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import * as C from "./styles";

export function Intro() {
    return (
        <C.SectionContainer>
            <C.MainContainer>
                <div className="text-container">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
                </div>
                
                <C.BenefitsContainer>
                    <InfoWithIcon 
                        iconBgColor="var(--yellow-dark)"
                        icon={<ShoppingCart weight="fill" size={18} />}
                        text="Compra simples e segura"
                    />
                    <InfoWithIcon 
                        iconBgColor="var(--base-text)"
                        icon={<Package weight="fill" size={18} />}
                        text="Embalagem mantém o café intacto"
                    />
                    <InfoWithIcon 
                        iconBgColor="var(--yellow)"
                        icon={<Timer weight="fill" size={18} />}
                        text="Entrega rápida e rastreada"
                    />
                    <InfoWithIcon 
                        iconBgColor="var(--purple)"
                        icon={<Coffee weight="fill" size={18} />}
                        text="O café chega fresquinho até você"
                    />
                </C.BenefitsContainer>
            </C.MainContainer>
            <img src={CoffeeIntro} />
        </C.SectionContainer>
    )
}
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import CoffeeIntro from "../../../../assets/CoffeeIntro.svg";
import * as C from "./styles";

export function Intro() {
    return (
        <C.SectionContainer>
            <C.MainContainer>
                <div className="text-container">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
                </div>
                
                <div className="desc-container">
                    <span>
                        <ShoppingCart size={30} weight="fill" className='cart-icon'/>
                        <p>Compra simples e segura</p>
                    </span>
                    <span>
                        <Package size={30} weight="fill" className='box-icon'/>
                        <p>Embalagem mantém o café intacto</p>
                    </span>
                </div>

                <div className="desc-container">
                    <span>
                        <Timer size={30} weight="fill" className="watch-icon" />
                        <p>Entrega rápida e rastreada</p>
                    </span>
                    <span>
                        <Coffee size={30} weight="fill" className='coffee-icon'/>
                        <p>O café chega fresquinho até você</p>
                    </span>
                </div>
            </C.MainContainer>
            <img src={CoffeeIntro} />
        </C.SectionContainer>
    )
}
import { CoffeeItem } from '../../components/CoffeeItem';
import { Header } from '../../components/Header';
import { coffees } from '../../data/coffees';

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { InfoWithIcon } from '../../components/InfoWithIcon';

import CoffeeIntro from '../../assets/images/CoffeeIntro.svg';
import * as C from './styles';

export function Home() {
  return (
    <div>
      <Header city="Porto Alegre" geoState="RS" />
      <C.SectionContainer>
        <C.MainContainer>
          <div className="text-container">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
          </div>

          <C.BenefitsContainer>
            <InfoWithIcon
              iconbgcolor="var(--yellow-dark)"
              icon={<ShoppingCart weight="fill" size={18} />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconbgcolor="var(--base-text)"
              icon={<Package weight="fill" size={18} />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconbgcolor="var(--yellow)"
              icon={<Timer weight="fill" size={18} />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconbgcolor="var(--purple)"
              icon={<Coffee weight="fill" size={18} />}
              text="O café chega fresquinho até você"
            />
          </C.BenefitsContainer>
        </C.MainContainer>
        <img src={CoffeeIntro} />
      </C.SectionContainer>

      <C.TitleWrapper>
        <h2>Nossos cafés</h2>
      </C.TitleWrapper>

      <C.CoffeeItemContainer>
        {coffees.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </C.CoffeeItemContainer>
    </div>
  );
}

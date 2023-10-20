import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 4rem;
  width: 120rem;
  justify-content: space-between;
  margin: 18rem auto;
`;

export const CheckoutOrderContainer = styled.section`
  flex: 1;
`;

export const TitleContainer = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 1.6rem;
`;

export const OrderAddressInfoContainer = styled.div`
  width: 100%;
  padding: 4rem;
  border-radius: 8px;
  background-color: var(--base-card);

  .left-topinfo-container {
    display: flex;
    gap: 1.2rem;
    margin-bottom: 6rem;

    svg {
      color: var(--yellow-dark);
    }

    .left-topinfo-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.8rem;
      }
    }
  }
`;

export const OrderInputForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 14.5rem);
  gap: 1.2rem;

  input {
    width: 100%;
    border: none;
    padding: 1.4rem;
    border-radius: 5px;
    background-color: var(--base-input);
    border: 1px solid var(--base-button);
    color: var(--base-text);

    &::placeholder {
      color: var(--base-label);
    }

    &:focus {
      border: 1px solid var(--yellow-dark);
    }
  }

  grid-template-areas:
    'cep cep cep cep'
    'rua rua rua rua'
    'numero complemento complemento complemento'
    'bairro cidade cidade uf';

  .rua {
    grid-area: rua;
  }
  .numero {
    grid-area: numero;
  }
  .bairro {
    grid-area: bairro;
  }
  .cidade {
    grid-area: cidade;
  }
  .uf {
    grid-area: uf;
  }
  .cep {
    grid-area: cep;
    width: 35%;
  }
  .complemento {
    grid-area: complemento;
    display: flex;
    align-items: center;

    span {
      padding: 1.4rem;
      font-style: italic;
      font-size: 1.4rem;
      position: absolute;
      margin-left: 37rem;
      color: var(--base-label);
      user-select: none;
    }
  }
`;

export const PaymentMethodContainer = styled.div`
  width: 100%;
  padding: 4rem;
  border-radius: 8px;
  background-color: var(--base-card);
  margin-top: 2rem;

  .left-bottominfo-container {
    display: flex;
    gap: 1.2rem;
    margin-bottom: 6rem;

    svg {
      color: var(--purple);
    }

    .left-bottominfo-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.8rem;
      }
    }
  }
`;

export const PaymentMethodOptions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.2rem;
`;

export const PaymentMethodOption = styled.input`
  padding: 0 1.6rem;
  background: var(--base-button);
  color: var(--base-text);
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 4.8rem;
  border: 1px solid var(--base-button);
  transition: 0.2s;
  user-select: none;
  flex: 1;

  svg {
    color: var(--purple);
  }

  &:hover {
    cursor: pointer;
    background: var(--base-hover);
  }

  &:focus {
    outline: 1px solid var(--purple);
  }
`;

// Rightside
export const RightSideContainer = styled.section``;

export const RTitleContainer = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 1.6rem;
`;

export const RightContent = styled.div`
  background-color: var(--base-card);
  width: 50rem;
  padding: 4rem;
  border-radius: 8px;

  .confirm-order {
    padding: 1.2rem 0.8rem;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 2.6rem;
    text-transform: uppercase;
    background: var(--yellow);
    color: #fff;
    font-weight: 700;
    font-size: 1.6rem;
    width: 100%;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: var(--yellow-dark);
    }
  }
`;

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const PriceInfo = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
  }

  div:nth-child(3) {
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 1.2rem 0.8rem;
  background: var(--yellow);
  border-radius: 8px;
`;

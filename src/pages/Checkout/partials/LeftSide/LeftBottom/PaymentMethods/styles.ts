import styled from "styled-components";

export const PaymentMethodsContainer =  styled.button`
  padding: 0 1.6rem;
  background: var(--base-button);
  color: var(--base-text);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 4.8rem;
  border: 1px solid var(--base-button);
  transition: 0.2s;
  user-select: none;

  svg {
    color: var(--purple);
  }

  &:hover {
    cursor: pointer;
    background: var(--base-hover);
  }
`
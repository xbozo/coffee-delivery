import styled from "styled-components";


export const CoffeeCardContainer = styled.div`
    display: flex;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--base-button);
`


export const CoffeeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;

    img {
        height: 7rem;
    }
`

export const CoffeeDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .coffee-name {
        color: var(--base-subtitle);
        font-weight: 500;
        padding: 0 0.8rem;
    }
`

export const CoffeeButtons = styled.div`
    padding: 0.8rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .remove-item {
        background-color: var(--base-button);
        border-radius: 8px;
        padding: 0.8rem;
        height: 3.2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--base-button);
        display: flex;
        align-items: center;
        transition: 0.2s;

        svg {
            color: var(--purple);
        }

        &:hover {
            cursor: pointer;
            background-color: var(--base-hover);
        }
    }

    span {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--base-text);
    }
`


export const CoffeePriceContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;

    span {
        font-weight: 700;
        font-size: 1.6rem;
    }
`
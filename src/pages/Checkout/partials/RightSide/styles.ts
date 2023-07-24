import styled from "styled-components";


export const RightSideContainer = styled.section`

`


export const TitleContainer = styled.h1`
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 1.6rem;
`


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
`


export const CoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`


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
`


export const ButtonContainer = styled.div`
    text-align: center;
    padding: 1.2rem 0.8rem;
    background: var(--yellow);
    border-radius: 8px;
`
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`

export const CoffeeContainer = styled.div`
    background-color: var(--base-card);
    border-radius: 8px;
    margin-bottom: 5rem;
    padding: 1.6rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .coffee-image {
        margin-top: -3.6rem;
    }

   .tags-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1.6rem;
        width: 100%;

        .tags {
            color: var(--yellow-dark);
            font-size: 1.3rem;
            font-weight: 700;
            padding: 0.5rem;
            border-radius: 8px;
            background-color: var(--yellow-light);
            text-transform: uppercase;
        }
   }

   .coffee-name {
        margin-top: 2rem;
        font-size: 2.4rem;
        font-weight: 700;
        font-family: 'Baloo 2' cursive;
   }

   .description {
        color: var(--base-label);
        text-align: center;
        font-size: 1.6rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
   }
`

export const BuyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-top: 4rem;

    .coffee-price-container {
        width: 7rem;
        display: flex;
        align-items: center;
        gap: 0.3rem;

        .coffee-real-coin {
            font-family: 'Baloo 2', cursive;
            font-weight: 400;
            font-size: 1.6rem;
        }

        .coffee-price {
            font-family: 'Baloo 2', cursive;
            font-size: 2.2rem;
            font-weight: 800;
        }
    }
`

export const BuyActionsContainer = styled.div`
    background-color: var(--base-button);
    border-radius: 8px;
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: center;
    gap: 1.6rem;

    .buy-counter {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        border-radius: 8px;

        button {
            background-color: var(--base-button);

            svg {
                color: var(--purple);
                font-weight: 700;

                &:hover {
                    cursor: pointer;
                    color: var(--purple-dark);
                }
            }
        }
        


        span {
            font-size: 2rem;
        }
    }

    .cart-icon-container {
        padding: 0.5rem;
        background-color: var(--purple-dark);
        transition: all 0.15s ease-in-out;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer;
            background-color: var(--purple);
        }

        .cart-icon {
            color: #fff;
        }

    }
`
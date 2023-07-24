import styled from "styled-components";

export const BuyCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border-radius: 8px;
    padding: 0.8rem;
    height: 3.2rem;
    background-color: var(--base-button);

    button {
        background-color: inherit;

        &:hover {
            cursor: pointer;
        }

        &:disabled {
            opacity: 0.5;

            &:hover {
                cursor: not-allowed
            }
        }

        svg {
            color: var(--purple);
            font-weight: 700;

            &:hover {
                color: var(--purple-dark);
            }
        }
    }
    


    span {
        font-size: 2rem;
    }
`
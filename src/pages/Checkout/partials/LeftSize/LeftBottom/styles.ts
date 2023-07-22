import styled from "styled-components";

export const LeftBottom =  styled.div`
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
                font-family: "Roboto", sans-serif;
                font-weight: 500;
                font-size: 1.8rem;
            }
        }
    }
`
import styled from "styled-components";

export const SectionContainer = styled.section`
    max-width: 120rem;
    margin: 13rem auto;
    gap: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 36rem;
    }
`;

export const MainContainer = styled.main`
    .text-container {
        max-width: 56rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        margin-bottom: 5rem;

        h1 {
            color: var(--base-title);
            font-family: 'Baloo 2', cursive;
            font-weight: 800;
            font-size: 4rem;
            line-height: 5.5rem;
            word-wrap: break-word;
        }
    }

    .desc-container {
        display: flex;
        margin-top: 1.6rem;
        min-width: 56rem;
    }
`;


export const BenefitsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    margin-top: 7rem;
`
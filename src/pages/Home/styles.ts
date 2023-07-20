import styled from "styled-components"

export const Container = styled.div`

`

export const TitleWrapper = styled.section`
    width: 120rem;
    display: flex;
    flex-wrap: wrap;
    margin: auto;

    h2 {
        color: var(--base-subtitle);
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 5.5rem;
    }
`

export const CoffeeItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 7rem auto;
    gap: 2rem;
    max-width: 130rem;
    justify-content: center;
    align-items: center;
`
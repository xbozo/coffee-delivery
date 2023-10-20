import styled from 'styled-components';

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
`;

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
`;

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 7rem auto;
  gap: 2rem;
  max-width: 130rem;
  justify-content: center;
  align-items: center;
`;

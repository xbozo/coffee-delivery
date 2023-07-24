import styled from "styled-components";


interface InfoContainerProps {
  color?: string;
}

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 6rem;

  svg {
    color: ${(props) => (props.color)};
  }
`;

export const LeftInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
  }
`;

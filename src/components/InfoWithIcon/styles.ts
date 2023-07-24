import styled from "styled-components";

export const MainContainer = styled.div`
        display: flex;
        align-items: center;
        gap: 1rem;
`

interface IconContainerProps {
    iconBgColor: string;
}

export const IconContainer = styled.div<IconContainerProps>`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: ${({ iconBgColor }) => iconBgColor};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`
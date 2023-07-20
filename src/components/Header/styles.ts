import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 3rem auto;
    width: 120rem;

    a .logo {
        height: 4rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 16px;

        span {
            background-color: var(--purple-light);
            color: var(--purple-dark);
            gap: 5px;
            border-radius: 8px;
            padding: 0.8rem;
            display: flex;
            align-items: center;
        }

        .cart-icon {
            background-color: var(--yellow-light);
            color: var(--yellow-dark);
            padding: 0.8rem;
            border-radius: 8px;

            &:hover {
                cursor: pointer;
            }
        }
    }
`
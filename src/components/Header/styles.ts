import styled from "styled-components";

export const StickyHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: white;
`

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
    }
`

export const HeaderInfo = styled.div`
    .geoInfo {
        background-color: var(--purple-light);
        color: var(--purple-dark);
        gap: 5px;
        border-radius: 8px;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        user-select: none;
    }

    .cart-button {
        position: relative;

        span {
            position: absolute;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            top: calc(-2rem / 2);
            right: calc(-2rem / 2);
            color: #fff;
            background: var(--yellow-dark);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 700;
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
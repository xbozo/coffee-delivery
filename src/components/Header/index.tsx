import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from '../../assets/images/Logo.svg';
import * as C from "./styles";

import { NavLink } from 'react-router-dom';
import { useCart } from "../../hooks/useCart";

interface HeaderPropsType {
    city: string
    geoState: string
}

export function Header({city, geoState}: HeaderPropsType) {
    const { cartQuantity } = useCart()

    return (
        <C.StickyHeader>
            <C.Header>
                <NavLink to="/">
                    <img src={Logo} className='logo'/>
                </NavLink>
                <C.HeaderInfo>
                    <span className="geoInfo">
                        <MapPin size={22} weight="fill" />
                        <p>{city}, {geoState}</p>
                    </span>
                    <NavLink to="/checkout" className="cart-button">
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                        <ShoppingCart size={38} weight="fill" className='cart-icon'/>
                    </NavLink>
                </C.HeaderInfo>
            </C.Header>
        </C.StickyHeader>
    )
}
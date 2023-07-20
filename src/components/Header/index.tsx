import Logo from '../../assets/Logo.svg';

import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import * as C from "./styles";

interface HeaderPropsType {
    city: string
    geoState: string
}

export function Header({city, geoState}: HeaderPropsType) {
    return (
        <C.Header>
            <a href="/">
                <img src={Logo} className='logo'/>
            </a>
            <div>
                <span>
                    <MapPin size={22} weight="fill" />
                    <p>{city}, {geoState}</p>
                </span>
                <ShoppingCart size={38} weight="fill" className='cart-icon'/>
            </div>
        </C.Header>
    )
}
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from '../../assets/images/Logo.svg';
import * as C from "./styles";

import { Link } from 'react-router-dom';

interface HeaderPropsType {
    city: string
    geoState: string
}

export function Header({city, geoState}: HeaderPropsType) {
    return (
        <C.StickyHeader>
            <C.Header>
                <Link to="/">
                    <img src={Logo} className='logo'/>
                </Link>
                <div>
                    <span>
                        <MapPin size={22} weight="fill" />
                        <p>{city}, {geoState}</p>
                    </span>
                    <Link to="/checkout">
                        <ShoppingCart size={38} weight="fill" className='cart-icon'/>
                    </Link>
                </div>
            </C.Header>
        </C.StickyHeader>
    )
}
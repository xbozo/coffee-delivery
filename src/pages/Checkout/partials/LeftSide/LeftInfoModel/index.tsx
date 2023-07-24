import { ReactNode } from 'react';
import * as C from "./styles";

  
interface PropsType {
    title: string;
    description: string;
    icon: ReactNode;
}

export function LeftInfo({ title, description, icon}: PropsType) {
    return (
        <C.InfoContainer>
            {icon}
            <C.LeftInfoText>
                <h4>{title}</h4>
                <span>{description}</span>
            </C.LeftInfoText>
        </C.InfoContainer>
    )
}
import { ReactNode } from "react";
import * as C from "./styles";


interface InfoWithIconPropsType {
    icon: ReactNode;
    text: string | ReactNode;
    iconBgColor: string;
}


export function InfoWithIcon({ icon, text, iconBgColor }: InfoWithIconPropsType) {
    return (
        <C.MainContainer>
            <C.IconContainer iconBgColor={iconBgColor}>
                {icon}
            </C.IconContainer>
            {typeof text === "string" ? <p>{text}</p> : text}     {/*Validação se a prop text é enviada como JSX ou string*/}
        </C.MainContainer>
    )
}
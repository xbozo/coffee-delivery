import * as C from "./styles";

interface IconProps {
    size: number;
    weight: string;
    color: string;
}
  
interface PropsType {
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>;
    size?: number;
    weight?: string; 
}

export function LeftInfo({ title, description, color, icon: Icon, size = 25, weight = "light"}: PropsType) {
    return (
        <C.InfoContainer>
            <Icon size={size} weight={weight} color={color} />
            <C.LeftInfoText>
                <h4>{title}</h4>
                <span>{description}</span>
            </C.LeftInfoText>
        </C.InfoContainer>
    )
}
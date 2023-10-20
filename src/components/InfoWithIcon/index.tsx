import { ReactNode } from 'react';
import * as C from './styles';

interface InfoWithIconPropsType {
  icon: ReactNode;
  text: string | ReactNode;
  iconbgcolor: string;
}

export function InfoWithIcon({
  icon,
  text,
  iconbgcolor,
}: InfoWithIconPropsType) {
  return (
    <C.MainContainer>
      <C.IconContainer iconbgcolor={iconbgcolor}>{icon}</C.IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}{' '}
      {/*Validação se a prop text é enviada como JSX ou string*/}
    </C.MainContainer>
  );
}

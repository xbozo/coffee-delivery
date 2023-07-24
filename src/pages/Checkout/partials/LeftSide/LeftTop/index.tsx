import { MapPinLine } from "phosphor-react";
import { FormEvent } from "react";
import { LeftInfo } from "../LeftInfoModel";
import * as C from "./styles";


interface LeftTopPropsType {
    onSubmit: FormEvent
}

export function LeftTop({ onSubmit }: LeftTopPropsType) {
    return (
        <C.LeftTop>
            <LeftInfo 
                title="Endereço de Entrega"
                description="Informe o endereço onde deseja receber seu pedido"
                icon={<MapPinLine size={25} color="var(--yellow-dark)" weight="light" />}
            />
            <C.LeftInputsForm>
                <div className="cep">
                    <input type="text" placeholder="CEP" />
                </div>
                <div className="rua">
                    <input type="text" placeholder="Rua" />
                </div>
                <div className="numero">
                    <input type="text" placeholder="Número" />
                </div>
                <div className="complemento">
                    <input type="text" placeholder="Complemento" />
                    <span>Opcional</span>
                </div>
                <div className="bairro">
                    <input type="text" placeholder="Bairro" />
                </div>
                <div className="cidade">
                    <input type="text" placeholder="Cidade" />
                </div>
                <div className="uf">
                    <input type="text" placeholder="UF" />
                </div>
            </C.LeftInputsForm>
        </C.LeftTop>
)
}
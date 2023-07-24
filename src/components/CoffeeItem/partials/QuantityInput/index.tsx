import { Minus, Plus } from "@phosphor-icons/react";
import * as C from './styles';

interface QuantityInputProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}


export function QuantityInput({ onIncrease, onDecrease, quantity }: QuantityInputProps) {

    return (
        <C.BuyCounter>
            <button onClick={onDecrease} disabled={quantity <= 1}>
                <Minus size={15} weight="bold" />
            </button>
            <span>
                {quantity}
            </span>
            <button onClick={onIncrease}>
                <Plus size={15} weight="bold" />
            </button>
        </C.BuyCounter>
    )
}
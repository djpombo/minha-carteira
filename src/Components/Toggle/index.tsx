import { Container, ToggleLabel, ToggleSelector } from './styles';
import { useState } from 'react';

interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({labelLeft, labelRight, checked, onChange}) => {
    const [online, setOnline] = useState(false);

    return (
        <Container>
            <ToggleLabel>{labelLeft}</ToggleLabel>
            <ToggleSelector
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={onChange}
            />
            <ToggleLabel>{labelRight}</ToggleLabel>
        </Container>
    )
};
export default Toggle;
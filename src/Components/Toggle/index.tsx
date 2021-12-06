import { Container, ToggleLabel, ToggleSelector } from './styles';
import { useState } from 'react';


const Toggle: React.FC = () => {
    const [online, setOnline] = useState(false);

    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked={online}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => setOnline(!online)}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
};
export default Toggle;
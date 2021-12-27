import React from 'react';
import { Container } from './styles';

interface ISelectOptions {
    options: {
        value: string | number,
        label: string | number
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
    
}

const Selectinput: React.FC<ISelectOptions> = ({ options, onChange, defaultValue }) => {

    //console.log(options[1].label)

    return (
        <Container>
            <select onChange={onChange} defaultValue={defaultValue}>
                {
                    options.map(option =>(
                        <option key={option.value}
                                value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>

        </Container>
    );
}
export default Selectinput;
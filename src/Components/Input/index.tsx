import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type IInputPros = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<IInputPros> = ({ ...rest }) => (
    <Container {...rest} />


);
export default Input;
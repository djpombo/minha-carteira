import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';


const Dashboard: React.FC = () => {

    const options = [{
        value: 'Janeiro', label: 'Janeiro',

    }, {
        value: 'Fevereiro', label: 'Fevereiro'
    },
    {
        value: 'Março', label: 'Março'
    },
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={ options } onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}
export default Dashboard;
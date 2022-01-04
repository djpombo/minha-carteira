import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';



import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import WalletBox from '../../Components/WalletBox';
import MessageBox from '../../Components/MessageBox';
import PieChartBox from '../../Components/PieChartBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../Utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grimmingImg from '../../assets/grinning.png';



const Dashboard: React.FC = () => {

    const [filterMonth, setFilterMonth] = useState<number>(new Date().getMonth() + 1);
    const [filterYear, setFilterYear] = useState<number>(new Date().getFullYear());
    
    
    const months = useMemo(() => {

        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        });

    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        })

    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === filterMonth && year === filterYear) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('invalid amount. Must to be a Number');
                }
            }
        });

        return total;

    }, [filterMonth, filterYear]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === filterMonth && year === filterYear) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amounth. Must to be a Number');
                }
            }
        });

        return total;


    }, [filterYear, filterMonth]);

    const getsBalance = useMemo(() => {
        let totalBalance: number = 0;

        try {
            totalBalance = totalGains - totalExpenses;
        } catch (error) {
            console.log(error);
        }

        return totalBalance;

    }, [totalGains, totalExpenses]);

    const message = useMemo(() => {
        if (getsBalance > 0) {
            return {
                title: 'Muito bem!',
                description: 'Sua carteira está positiva',
                icon: happyImg,
                footerText: 'Continue assim, considere investir o saldo'
            }
        } else if (getsBalance === 0) {
            return {
                title: 'UFA!',
                description: 'Sua carteira está zerada',
                icon: grimmingImg,
                footerText: 'Cuidado, você só ganhou exatamente o que gastou, guarde algo'
            }
        } else {
            return {
                title: 'Que triste!',
                description: 'Você gastou mais que ganhou',
                icon: sadImg,
                footerText: 'Você teve um saldo negativo, corte gastos desnecessários'
            }
        }
    }, [getsBalance]);

    const relationExpenseVersusGains = useMemo(()=>{
        const total = totalGains + totalExpenses;

        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: Number(percentGains.toFixed(1)),
                color: "#F7931B" 
            },
            {
                name: "Saidas",
                value: totalExpenses,
                percent: Number(percentExpenses.toFixed(1)),
                color: "#E44C4E"
            }
        ];

        return data;

    }, [totalGains, totalExpenses]);

    const handleFilterMonth = (month: string) => {
        try {
            const parseMonth = parseInt(month);
            setFilterMonth(parseMonth);
        } catch {
            throw new Error('Invalid Month entry');
        }
    }

    const handleFilterYear = (year: string) => {
        try {
            const parseYear = parseInt(year);
            setFilterYear(parseYear);
        } catch {
            throw new Error('Invalid Year entry');
        }
    }

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput
                    options={months}
                    onChange={(e) => handleFilterMonth(e.target.value)}
                    defaultValue={filterMonth}
                />
                <SelectInput
                    options={years}
                    onChange={(e) => handleFilterYear(e.target.value)}
                    defaultValue={filterYear}
                />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="saldo"
                    amount={getsBalance}
                    footerlabel='atualizado nas entradas e saídas'
                    icon="dollar"
                    color='#4E41F0'
                />

                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerlabel='ultima movimentacao 03/01/2022'
                    icon="arrowUp"
                    color='#F7931B'
                />

                <WalletBox
                    title="saídas"
                    amount={totalExpenses}
                    footerlabel='ultima movimentacao em 03/01/2021'
                    icon="arrowDown"
                    color='#E44C4E'
                />


                <MessageBox
                    title={message.title}
                    description={message.description}
                    icon={message.icon}
                    footerText={message.footerText}
                />

                <PieChartBox data={relationExpenseVersusGains} />

            </Content>
        </Container>
    );
}
export default Dashboard;
import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';

import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import WalletBox from '../../Components/WalletBox';
import MessageBox from '../../Components/MessageBox';
import PieChartBox from '../../Components/PieChartBox';
import HistoryBox from '../../Components/HistoryBox';
import BarChartBox from '../../Components/BarChartBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../Utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grimmingImg from '../../assets/grinning.png';
import opsImg from '../../assets/pensando.png'


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
        } else if (totalGains === 0 && totalExpenses === 0){
            return {
                title: 'Ops!',
                description: 'Neste mês não há registros de entradas nem saídas',
                icon: opsImg,
                footerText: 'Parece que você não fez nenhum registro no mês a ano selecionado'
            }
        } else if (getsBalance === 0) {
            return {
                title: 'UFA!',
                description: 'Sua carteira está zerada',
                icon: grimmingImg,
                footerText: 'Cuidado, você só ganhou exatamente o que gastou, guarde algo'
            }
        }else {
            return {
                title: 'Que triste!',
                description: 'Você gastou mais que ganhou',
                icon: sadImg,
                footerText: 'Você teve um saldo negativo, corte gastos desnecessários'
            }
        }
    }, [getsBalance, totalGains, totalExpenses]);

    const relationExpenseVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: "#F7931B"
            },
            {
                name: "Saidas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0,
                color: "#E44C4E"
            }
        ];

        return data;

    }, [totalGains, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
            let amountEntry = 0;

            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if (gainMonth === month && gainYear === filterYear) {
                    try {
                        amountEntry += Number(gain.amount);
                    } catch {
                        throw new Error('Invalid amount entry, acpeted only numbers');
                    }
                }
            });

            let amountOutput = 0;

            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === month && expenseYear === filterYear) {
                    try {
                        amountOutput += Number(expense.amount);
                    } catch {
                        throw new Error('Invalid amount entry, acpeted only numbers');
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substring(0, 3),
                amountEntry,
                amountOutput
            }
        })
            .filter(item => {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();

                return (filterYear === currentYear && item.monthNumber <= currentMonth) || (filterYear < currentYear)

            });
    }, [filterYear]);

    const relationExpRecurrentVsEventuals = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === filterMonth && year === filterYear;

        }).forEach((expense) => {
            if (expense.frequency === 'recorrente') {
                return amountRecurrent += Number(expense.amount);
            }
            if (expense.frequency === 'eventual') {
                return amountEventual += Number(expense.amount);
            }
        });

        const total = amountRecurrent + amountEventual;


        const percentRecurrent = Number(((amountRecurrent /total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual /total) * 100).toFixed(1));

        return [
            {
                name: 'recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: '#4E41F0'
            },
            {
                name: 'eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: '#E44C4E'

            }
        ]

    }, [filterYear, filterMonth]);

    const relationGainsRecurrentVsEventuals = useMemo(() => { 
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === filterMonth && year === filterYear;

        }).forEach((gain) => {
            if (gain.frequency === 'recorrente') {
                return amountRecurrent += Number(gain.amount);
            }
            if (gain.frequency === 'eventual') {
                return amountEventual += Number(gain.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        const percentRecurrent = Number(((amountRecurrent /total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual /total) * 100).toFixed(1));

        return [
            {
                name: 'recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: '#4E41F0'
            },
            {
                name: 'eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: '#E44C4E'

            }
        ]

    }, [filterYear, filterMonth]);

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

                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry='#F7931B'
                    lineColorAmountOutput='#E44C4E'
                />

                <BarChartBox title={'Saídas'} data={relationExpRecurrentVsEventuals}/>
                <BarChartBox title={'Entradas'} data={relationGainsRecurrentVsEventuals}/>
                
                

            </Content>
        </Container>
    );
}
export default Dashboard;
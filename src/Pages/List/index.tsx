import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './styles';

import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import HistoryFinanceCard from '../../Components/HistoryFinanceCard';

import { useParams } from 'react-router-dom';
import { uuid } from 'uuidv4';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatedCurrency from '../../Utils/formatedCurrency';
import formatedDate from '../../Utils/formatedDate';
import listOfMonths from '../../Utils/months';

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    type: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {

    const { type } = useParams();//faz o casting do que vem na url como parametro
    const [data, setData] = useState<IData[]>([]);
    const [filterMouth, setFilterMouth] = useState<string>(String(new Date().getMonth() + 1));
    const [filterYear, setFilterYear] = useState<string>(String(new Date().getFullYear()));
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual']);

    const months = useMemo(() => {

        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        });

    }, []);

    const pageData = useMemo(() => {
        if(type === 'entry-balance'){
            return{
                title: 'Entradas',
                lineColor: '#F7931B',
                listData: gains 
            }
        } else {
            return{
                title: 'Saídas',
                lineColor: '#E44C4E',
                listData: expenses
            }
        }

    }, [type]);


    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        pageData.listData.forEach(item => {
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

    }, [pageData.listData])

    const handleFrequencyClick = (frequency: string) =>{
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

        if(alreadySelected >= 0){
            const filtered = frequencyFilterSelected.filter(item => item !== frequency);
            setFrequencyFilterSelected(filtered);
        } else {
            
            setFrequencyFilterSelected((prev) => [...prev, frequency]); //prev vem de previous, ou seja, estado anterior
        }
    }

    useEffect(() => {

        const filtradedData = pageData.listData.filter(item => {
            const date = new Date(item.date);
            const year = String(date.getFullYear());
            const mouth = String(date.getMonth() + 1);

            return mouth === filterMouth && year === filterYear && frequencyFilterSelected.includes(item.frequency);
        })

        const formatedData = filtradedData.map(item => {

            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatedCurrency(Number(item.amount)),
                type: item.type,
                frequency: item.frequency,
                dateFormatted: formatedDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })


        setData(formatedData);

    }, [filterYear, filterMouth, pageData.listData, frequencyFilterSelected]);

   
    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput
                    options={months}
                    onChange={(e) => setFilterMouth(e.target.value)}
                    defaultValue={filterMouth} 
                />
                <SelectInput 
                    options={years}
                    onChange={(e) => setFilterYear(e.target.value)}
                    defaultValue={filterYear} 
                />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurent
                                ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>

                <button
                    type="button"
                    className={`tag-filter tag-filter-eventuals
                                ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
            </Filters>

            <Content>

                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }

            </Content>
        </Container>
    )
}
export default List;
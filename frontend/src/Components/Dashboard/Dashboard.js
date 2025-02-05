import React, {useEffect} from "react";
import styled from "styled-components";
import {InnerLayout} from "../../styles/Layouts";
import Chart from "../Chart/Chart";
import {useGlobalContext} from "../../context/globalContext";
import {dollar} from "../../utils/Icons";
import History from "../History/History";



function Dashboard() {
    const {totalExpense, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses} = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className="balence">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History/>
                        <h2 className="salary-title">Min<span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>

                        <h2 className="salary-title">Min<span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con {
        display: flex;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con {
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
            }
        }
    }
    
`;

export default Dashboard;
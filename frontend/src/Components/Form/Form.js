import React, {useState} from 'react'
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {useGlobalContext} from "../../context/globalContext";


function Form() {
    const {addIncome} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })
    const {title, amount, date, category, description} = inputState;

    const handleInput = name => event => {
        setInputState({...inputState, [name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addIncome(inputState)
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name={"title"}
                    placeholder={"Salary Title"}
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value = {amount}
                    type="text"
                    name={"amount"}
                    id={'amount'}
                    placeholder={"Salary Amount"}
                    onChange={handleInput('amount')}
                />
            </div>

            <div className="input-control">
                <DatePicker
                    id={'date'}
                    placeholder="Enter a Date"
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) =>
                        setInputState({...inputState, [date]: date}
                        )}
                />
            </div>

            <div className="selects input-control">
                <select required value ={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="sidehustles">Side Hustles</option>
                    <option value="investiments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="cripto">Cripto</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="youtube">Youtube</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="submit-btn">
                <button>Add Income</button>
            </div>

        </FormStyled>
    )
}

const FormStyled = styled.div`

`;

export default Form
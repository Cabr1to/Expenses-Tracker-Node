import React, {useState} from 'react'
import styled from "styled-components";

function From() {
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

    return (
        <FormStyled>
            <div className="input-control">
                <input
                type="text"
                value={title}
                name={"title"}
                placeholder={"Salary Title"}
                onChange={handleInput('title')}
                />
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.div``;

export default Form
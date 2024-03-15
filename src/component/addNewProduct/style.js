import styled from "styled-components"

export const Input = styled.input`
    margin: 25px;
    outline: none;
    padding: 6px 50px;
    border: 1px solid;
`

export const Button = styled.button`
    padding: 6px 50px;
    background: #000;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid;

    &:hover{
        background: #fff;
        color: #000;
        transition: 0.5s;
    }
`
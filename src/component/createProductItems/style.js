import styled from "styled-components";

export const ProductBox = styled.div`
    border: 1px solid;
    display: flex;
    flex-direction: column;
    width: 200px;
    heigth: 100px;
    padding: 20px;
`

export const ProductBuy = styled.button`
    font-size: 17px;
    border: 1px solid;
    border-radius: 5px;
    background: #000;
    color: #fff;
    padding: 5px 20px;
    cursor: pointer;

    &:hover{
        background: #fff;
        color: #000;
        transition: 0.5s;
    }
`

export const ProductTitle = styled.div`
    display: flex;
    font-size: 25px;   
`

export const ProductDescription = styled.div`
    display: flex;
    margin-bottom: 20px;
    font-size: 16px;
    text-align: start;
`

export const ProductPrice = styled.div`
    display: flex;
    margin-bottom: 20px;
    font-size: 20px;
`

export const ProductsBox = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: center;
    justify-items: center;
    margin: 0 auto;
    column-gap: 100px;
    row-gap: 50px;
`
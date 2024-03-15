import { useEffect } from "react"
import { IData } from "../../types/data"
import * as Styled from "./style"

interface ProductListProps{
    state: IData[]
}

export const Products:React.FC<ProductListProps> = ({state}) => {
    useEffect(() => console.log(state), [state])
    return <section>
        <Styled.ProductsBox>
            {state.map(element => {
                return <Styled.ProductBox key={element.id}>
                    <Styled.ProductTitle>{element.title}</Styled.ProductTitle>
                    <Styled.ProductPrice>{element.price}$</Styled.ProductPrice>
                    <Styled.ProductDescription>{element.description}</Styled.ProductDescription>
                    <img src="https://c1.peakpx.com/wallpaper/566/531/761/bread-farmer-s-bread-baked-goods-food-wallpaper.jpg"/>
                </Styled.ProductBox>
            })}
        </Styled.ProductsBox>
    </section>
}
import { useEffect, useRef, useState } from "react"
import { IData } from "../../types/data"
import { Button, Input } from "./style"
import { Products } from "../createProductItems/CreateProducts"


export const ProductFilling:React.FC = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(Number)
    const [state, setState] = useState<IData[]>([])

    const changeInput = (text:string, productPrice:number, description: string) => {
        if(productPrice === 0 || text === "" || description === ""){
            alert("Error: Please fill in the data")
        }else{
            if(state.find(el => el.title === text)){
                alert("Error: Such a product already exists")
            }else{
                setState([...state, {
                    id: Date.now(),
                    title: text,
                    description: description,
                    price: productPrice,
                    src: "../../images/bread.jpg"
                }])
            }
        }
        
    }

    return <div>
        <div>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
            <Input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"/>
            <Input type="number" onChange={e => setPrice(Number(e.target.value))} placeholder="Price"/>
            <Button onClick={() => changeInput(title, price, description)}>Clcik</Button>
        </div>
        <Products state= {state}/>
    </div>
}
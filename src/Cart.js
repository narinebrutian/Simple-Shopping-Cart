import {useState} from "react"
import {CartHeader} from "./CartHeader"
import CartItemList from "./CartItemList"
import CartFooter from "./CartFooter"


function Cart(){
    const [data, setData] = useState({
        items: [{
            price: 1300,
            image: 'finalblender.jpg',
            quantity: 1,
            name: 'Blender',
            color: 'Black'
        },
        {
            price: 2200,
            image: 'fridge.jpg',
            quantity: 1,
            name: 'Portable fridge',
            color: 'Blue'
        }
        ],
        subtotal: 3500
    });
    return (
        <div> 
            <CartHeader />
            <CartItemList props={data.items}/>
            <CartFooter props={data} />
        </div>
    )
}
export default Cart;
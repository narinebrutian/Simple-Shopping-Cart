import CartItem from "./CartItem"

function CartItemList({props}){
    return (
        <div>
            {props.map((item, index) => {
                return (
                   <CartItem product={item} key={index} />
                )
            })}
        </div>
    )
}

export default CartItemList;

function CartFooter({props}){
    return (
        <div>
            <button className="submit" id="submit">Submit</button>
            <div>
                <p>{props.subtotal}</p>
            </div>
        </div>
    )
}

export default CartFooter;


function CartItem({product}){
    
    return (
        <div className="bigDiv">
            <div className="pic1">
                <br/>
                <img src={product.image} alt="blender/fridge" width="60" height="60"/>
            </div>
            <div>
                <div className="nameDiv">
                   {product.name} 
                </div>
                <div className="colorDiv">
                    <p>{product.color}</p>
                </div>
                    <div className="select">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>   
                    </div>
                    <div className="price">
                    <p>{product.price}</p>
                    </div>
                    <div className="binDiv">
                        <button>Delete</button>
                    </div>
                    <hr/>
            </div>
        </div>
    )
}

export default CartItem;
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";
const Cart = () => {
	const products = useSelector((state) => state.cart);
	const total  = products.reduce((total, product) =>total + product.price,0)
	const dispatch = useDispatch();
	const handleRemove = (productId) => {
		dispatch(remove(productId));
	};
	return (
		<div>
			<h2>cart</h2>
			<div>
				<h1 style={{textAlign:'center'}}>Total: ${total.toFixed(2)}</h1>
			</div>
			{
				products.map((product)=>{
					return(
						<div className="cartCard" key={product.id}>
                            <img className="cartImg" src={product.image} alt={product.title} />
                            <h2>{product.title.slice(0,30)}</h2>
                            <p>{product.price}</p>
                            <button className="button-49" onClick={()=>handleRemove(product.id)}>Remove</button>
                        </div>
					)
				})
			}
		</div>
	);
};
export default Cart;

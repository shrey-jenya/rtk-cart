import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const items = useSelector((state) => state.cart);
	const products = useSelector((state) => state.cart);

	const total = products.reduce((total, product) => total + product.price, 0);
	return (
		<div>
			<ul>
				<Link to="/">
					<span>ચોર બજાર</span>
				</Link>
				<Link to="/">Home</Link>
				<Link to="cart">Cart </Link>
				<span>
					Cart Items : {items.length} / ₹{total.toFixed(2)}
				</span>
			</ul>
		</div>
	);
};

export default Header;

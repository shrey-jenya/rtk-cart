import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";
const Product = () => {
	const dispatch = useDispatch()
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		const response = await fetch(`https://fakestoreapi.com/products/`);
		const data = await response.json();
		// console.log(data)
		setProducts(data);
	};
	const handleAdd = (product)=>{
		dispatch(add(product))
	}
	return (
			<div className="parent" >
				{products?.length > 0 &&
					products.map((item) => {
						return (
							<div className="productCard" key={item.id}>

								<img
									className="productImg"
									src={item.image}
									alt={item.title}
								/>

								<h2>{item.title.slice(0,25)} </h2>
								<div className="action">

								<p>₹{item.price}</p>
								<button  className="button-49" onClick={()=>handleAdd(item)}>Add to Cart</button>
								</div>
							</div>
						);
					})}
				{/* {products.map((product,id) =>{
				return (
                    <div key={id}>
                        <img className="productImg" src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                )
			} )} */}
			</div>
	);
};
export default Product;

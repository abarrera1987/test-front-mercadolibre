import { Link } from "react-router-dom"

function CardItem(props: any) {
	const { item } = props
	// console.log("data", item);
	return (
		<>
			<Link className="link-styles" key={item.id} to={`${item.id}`}>
				<div className="card-item">
					<div className="img-content">
						<img src={item.picture} alt="" className="img-item" />
					</div>
					<div className="info-content">
						<span className="price-item">
							${new Intl.NumberFormat().format(item.price.amount)}
						</span>
						<p className="description-item">
							{item.title}
						</p>
					</div>
				</div>
			</Link>
		</>
	)
}

export default CardItem
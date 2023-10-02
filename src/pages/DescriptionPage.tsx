import { useEffect, useState } from "react";
import { Services } from "../services/Services";
import { useParams } from 'react-router';

function DescriptionPage() {
	const { getItem } = Services;
	let { id = "" } = useParams();
	const [item, setItem] = useState<any>([]);

	useEffect(() => {
		let isMounted = true;
		const fetchData = async () => {
			if (isMounted) {
				const itemsListData: any = await getItem(id);
				setItem(itemsListData.data.item);
			}

		};
		fetchData();
		return () => {
			isMounted = false;
		};
	}, [id]);
	return (
		<>
			{
				item ? (
					<div className="body-container">

						<div className="content-description">
							<section className="img-content">
								<img src={item.picture} alt="" />
							</section>
							<section className="buy-content">
								<span className="count-buy-item">
									{item.condition == 'new' ? "Nuevo" : "Usado" } - {item.sold_quantity} vendidos
								</span>
								<p className="name-item">
									{item.title}
								</p>
								<p className="price-item">
									{
										item.price != undefined ? (<>{new Intl.NumberFormat("es-AR",{style:"currency",currency:item.price.currency}).format(item.price.amount)}</>) : (<>$ 0</>)
									}
									
								</p>
								<button className="primary-button"> Comprar </button>
							</section>
							<section className="description-content">
								<p className="title-item">Descripción del producto</p>
								<div className="description-item">
									{item.description}
								</div>
							</section>
						</div>

					</div>

				) : (<></>)
			}

		</>
	)
}

export default DescriptionPage
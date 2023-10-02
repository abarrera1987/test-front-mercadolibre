import CardItem from "../components/CardItem"
import queryString from "query-string"
import { Services } from "../services/Services";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

const SearchResultPage = () => {
	const navigate = useNavigate();
	const { itemsList } = Services;
	const [items, setItems] = useState<any>([]);
	const search: any = queryString.parse(window.location.search).search;
	useEffect(() => {
		setItems([])
		const fetchData = async () => {
			const itemsListData: any = await itemsList(search);
			setItems(itemsListData.data);

		};
		fetchData();
	}, [search]);


	return (
		<>
			<BreadCrumbs items={items} />
			<div className="body-container">
				{items.items ? (
					items.items.map((item: any) => {
						return (
							<>
								<div key={item.id}>
									<CardItem item={item} />
								</div>
								<hr className="hr-item" />
							</>
						);
					})
				) : (
					<p>No hay datos disponibles</p>
				)}
			</div>
		</>
	);
}

export default SearchResultPage;

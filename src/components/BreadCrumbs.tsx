function BreadCrumbs(props: any) {
	const { items } = props
	console.log("object", props);
	return (

		<div className="bread-crumbs">
			{items.categories ? (
				items.categories.map((item: any, i: any) => {
					return (
						<>
							{item} <span className="arrow"> &#62; </span>
						</>

					);
				})
			) : (
				<p>No hay datos disponibles</p>
			)}

		</div>
	)
}

export default BreadCrumbs
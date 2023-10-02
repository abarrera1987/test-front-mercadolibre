import { Outlet, useNavigate } from 'react-router-dom'
import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
// import { itemsList } from '../services/Services.js';
function Layout() {
	const search: any = queryString.parse(window.location.search).search;
	const [searchInput, setSearchInput] = useState("")
	const navigate = useNavigate();
	const handleSubmit = async (event: any) => {
		event.preventDefault()
		console.log(searchInput);
		// const getItemsList = searchInput === "" ? return : await itemsList(searchInput)
		if (searchInput != "") {
			console.log("object");
			// console.log("en el handle",redirect(`items?search=${searchInput}`));
			navigate(`/items?search=${searchInput}`)

		}
		if (searchInput == "") {
			navigate('/')
		}

	}
	useEffect(() => {
		if (search != undefined) {
			console.log("el searh", search);
			setSearchInput(search)
			navigate(`/items?search=${search}`) // Usar search directamente
		}
	}, [search])


	return (
		<>
			<nav id='header-container' className="navbar">
				<div className="container">
					<div className='row w-100'>
						<a className="col-2 col-md-1">
							<Link to="/">
								<img src='/assets/img/Logo_ML.png' />
							</Link>
						</a>
						<div className="col-10 col-md-11 ">
							<form onSubmit={handleSubmit} >
								<div className='input-group'>
									<input
										defaultValue={search}
										id='search-input'
										type="text"
										className="form-control "
										placeholder="Nunca dejes de buscar"
										value={searchInput}
										onChange={(e) => setSearchInput(e.target.value)} />
									<span className="input-group-text">
										<FontAwesomeIcon icon={faMagnifyingGlass} />
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	)
}

export default Layout
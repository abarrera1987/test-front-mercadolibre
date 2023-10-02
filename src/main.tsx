import React from 'react'
import ReactDOM from 'react-dom/client'
import '../public/assets/styles/styles.sass'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import SearchPage from './pages/SearchPage.tsx'
import DescriptionPage from './pages/DescriptionPage.tsx'
import SearchResultPage from './pages/SearchResultPage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <SearchPage />
			},
			{
				path: '/items',
				element: <SearchResultPage />
			},
			{
				path: '/items/:id',
				element: <DescriptionPage />
			}
		]
	}
])


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

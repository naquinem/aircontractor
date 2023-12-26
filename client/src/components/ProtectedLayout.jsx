import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
//import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

export default function DefaultLayout() {
	const { user } = useAuth();
	
	// check if user is logged in or not from server
	/*useEffect(() => {
		setTimeout((async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.name);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					window.location.href = '/';
				}
			}
		}), 2000);
	}, []);*/


	// if user is not logged in, redirect to login page
	if (!user) {
		return <Navigate to="/" />;
	}

	const picture = new URL('../img/cassette.png', import.meta.url)
	
	return (
		<>
			<div className='w-full h-screen'>
				<header>
					<Header />
				</header>
				<main className='container py-5'>
					<Outlet />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
}
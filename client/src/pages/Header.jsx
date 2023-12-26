
import React, { useEffect } from 'react';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
	{ name: 'Home', href: '/profile' },
	{ name: 'About Us',href: '/about' },
	{ name: 'Contact Us', href: '/contact' },

  ]
  
  function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
  }

export default function Header() {
    const { user, setUser } = useAuth();
    useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					
				}
			}
		})();
	}, []);

    const handleLogout = async () => {
		try {
			const resp = await axios.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				window.location.href = '/';
			}
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <div>
			<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button*/}
						<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
						<span className="absolute -inset-0.5" />
						<span className="sr-only">Open main menu</span>
						{open ? (
							<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
						) : (
							<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
						)}
						</Disclosure.Button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="hidden sm:ml-6 sm:block">
						<div className="flex space-x-4">
							{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={classNames(
								item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
								'rounded-md px-3 py-2 text-sm font-medium'
								)}
								aria-current={item.current ? 'page' : undefined}
							>
								{item.name}
							</a>
							))}
						</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button
						type="button"
						className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						>
						<span className="absolute -inset-1.5" />
						<span className="sr-only">View notifications</span>
						<BellIcon className="h-6 w-6" aria-hidden="true" />
						</button>

						{/* Profile dropdown */}
						<Menu as="div" className="relative ml-3">
						<div>
							<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
							<span className="absolute -inset-1.5" />
							<span className="sr-only">Open user menu</span>
							<div className='text-white m-2'>{user.name}</div>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

							<Menu.Item>
								{({ active }) => (
								<a onClick={handleLogout}
									href="#"
									className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-gray-800')}
								>
									Sign out
								</a>
								)}
							</Menu.Item>
							</Menu.Items>
						</Transition>
						</Menu>
					</div>
					</div>
				</div>

				<Disclosure.Panel className="sm:hidden">
					<div className="space-y-1 px-2 pb-3 pt-2">
					{navigation.map((item) => (
						<Disclosure.Button
						key={item.name}
						as="a"
						href={item.href}
						className={classNames(
							item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
							'block rounded-md px-3 py-2 text-base font-medium'
						)}
						aria-current={item.current ? 'page' : undefined}
						>
						{item.name}
						</Disclosure.Button>
					))}
					</div>
				</Disclosure.Panel>
				</>
			)}
		</Disclosure>  
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import CloseIcon from '../../public/Icons/Close'
import OpenIcon from '../../public/Icons/Open'
import clsx from 'clsx'

export default function Drawer() {
	const [isOpen, setIsOpen] = useState(false)
	const links = [
		{
			id: 1,
			name: 'home',
		},
		{
			id: 2,
			name: 'about',
		},
		{
			id: 3,
			name: 'projects',
		},
		{
			id: 4,
			name: 'contact',
		},
	]

	return (
		<nav className="relative">
			<OpenIcon className="h-6 w-6" onClick={() => setIsOpen(true)} />
			<div
				className={clsx(
					'h-screen border-r-gray-300 border space-y-6  bg-white z-50 fixed top-0  transition-all duration-500 overflow-hidden',
					isOpen ? 'w-4/5' : 'w-0'
				)}
			>
				<div className="py-6 px-3">
					<header className="flex justify-between items-center">
						<h1 className="text-2xl font-bold">Sparrow</h1>
						<CloseIcon className="h-6 w-6" onClick={() => setIsOpen(false)} />
					</header>
					<ul>
						{links.map((link) => (
							<li
								key={link.id}
								className="capitalize py-3 hover:bg-gray-100 px-3 "
							>
								{link.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

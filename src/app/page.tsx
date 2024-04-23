'use client'
import Drawer from '@/components/drawer'
import { useState } from 'react'
import OpenIcon from '../../public/Icons/Open'

export default function Home() {
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
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenModal = () => {
		setIsOpen(true)
	}

	const handleCloseModal = () => {
		setIsOpen(false)
	}
	return (
		<main>
			<Drawer />
		</main>
	)
}

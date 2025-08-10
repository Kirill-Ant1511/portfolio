'use client'
import { useTheme } from '@/providers/useTheme'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'

export function Header() {
	const { theme, toggleTheme } = useTheme()
	return (
		<header className='fixed top-0 w-full flex gap-5 justify-center items-center dark:bg-neutral-300 bg-neutral-700 p-4 '>
			<nav className='flex gap-2'>
				<Link href='#Greeting'>Обо мне</Link>
				<Link href='#Skills'>Навыки</Link>
				<Link href='#Projects'>Проекты</Link>
			</nav>

			<button
				onClick={toggleTheme}
				className='flex items-center'
			>
				{theme === 'dark' ? <Moon size={22} /> : <Sun size={22} />}
			</button>
		</header>
	)
}

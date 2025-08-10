'use client'
import { ReactNode, useEffect, useState } from 'react'
import { ThemeContext } from './theme.context'

export function ThemeProvider({ children }: { children: ReactNode }) {
	if (typeof window !== 'undefined') {
	} else {
		console.log('we are running on the server')
	}
	const [theme, setTheme] = useState(() => {
		if (typeof window !== 'undefined') {
			const storedItem = localStorage.getItem('theme')
			if (storedItem) {
				return storedItem
			} else {
				return 'dark'
			}
		} else {
			return 'dark'
		}
	})
	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark')
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

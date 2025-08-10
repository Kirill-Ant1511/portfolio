'use client'
import { createContext } from 'react'

interface IThemeContext {
	theme: string
	toggleTheme: () => void
}
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

import { ISkill, ISkillLibrary } from '@/types/skill.types'

export const skills: ISkill[] = [
	{
		icon: '/ReactNext.png',
		title: 'React/NextJS',
		description: 'Фреймворк для разработки веб сайтов на JS',
		mainSkill: [
			'Хорошие понимание в архитектуре проекта',
			'Работа с паралельным роутингом',
			'Работа с порталами(в основном для модальных окон)'
		]
	},
	{
		icon: '/tailwind.svg',
		title: 'Tailwind CSS',
		description:
			'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
		mainSkill: [
			'Работа с группами',
			'Ну всё что можно сказать что это Tailwindcss'
		]
	},
	{
		icon: '/redux.svg',
		title: 'Redux Toolkit',
		description: 'State Manager',
		mainSkill: [
			'Создания store',
			'Работа со слайсами',
			'Для работы с состояниями использую простые кастомные хуки',
			'Помимо Redux Toolkit, знаю Zustand'
		]
	},
	{
		icon: '/typescript.svg',
		title: 'TypeScript',
		description: 'Programming language',
		mainSkill: ['Замечательное понимания типизации', 'Работа с дженериками']
	},
	{
		icon: '/animateui.svg',
		title: 'UI Library',
		description: 'Which ui library I use',
		mainSkill: ['LucideIcon', 'AnimateUI', 'ShadCN']
	}
]

export const mySkills: ISkillLibrary[] = [
	{
		icon: '/react-2.svg',
		title: 'React'
	},
	{
		icon: '/next-js.svg',
		title: 'NextJS'
	},
	{
		icon: '/typescript.svg',
		title: 'TypeScript'
	},
	{
		icon: '/javascript-1.svg',
		title: 'JavaScript'
	},
	{
		icon: '/tailwind.svg',
		title: 'Tailwindcss'
	},
	{
		icon: '/redux.svg',
		title: 'Redux Toolkit'
	},
	{
		icon: '/axios.svg',
		title: 'Axios'
	}
]

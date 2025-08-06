import { ISkill, ISkillLibrary } from '@/types/skill.types'

export const skills: ISkill[] = [
	{
		icon: '/ReactNext.png',
		title: 'React/NextJS',
		description: 'React is a JavaScript library for building user interfaces.',
		mainSkill: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
	},
	{
		icon: '/tailwind.svg',
		title: 'Tailwind CSS',
		description:
			'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
		mainSkill: ['Tailwind CSS', 'HTML', 'CSS']
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

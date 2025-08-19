import { IProject } from '@/types/project.types'

export const projects: IProject[] = [
	{
		id: '1',
		title: 'Sky Tracker ✈️',
		description:
			'Сайт для отслеживания данных о рейсе в реальном времени. Присутсвует возможность добавить рейс в избранное и отслеживать рейс до его оканчания. Сайт имеет весь основной функционал, кроме отслеживания рейсов в реальном врмеени, так как сложности в поиске доступного бесплатного API, но и без этого проект затрагивает все основные знания в разработке сайтов. Смысл данного проекта заключается в изучении основ в разработке веб-сайтов. При разработки была изучена работа с Redux Toolkit, Tanstack Query, Tailwindcss, и закреплены знания в архитектуре проекта, работа с TypeScript, react-router-dom.',
		image: [
			'/projects/sky-tracker/1.png',
			'/projects/sky-tracker/2.png',
			'/projects/sky-tracker/3.png',
			'/projects/sky-tracker/4.png'
		],
		usesTechnology: [
			'React',
			'Tailwindcss',
			'TypeScript',
			'Tanstack Query',
			'axios',
			'react-router-dom',
			'leaflet',
			'Redux Toolkit',
			'Lucide Icon',
			'clsx'
		],
		githubUrl: 'https://github.com/Kirill-Ant1511/sky-tracker'
	},
	{
		id: '2',
		title: 'Task Flow 📝',
		description:
			'Сайт для планирования своих задач или же задач целой команды. Здесь можно плинировать свои действия начиная с простых домащних задач, заканчивая целыми проектами и управляя целыми командами. Общайся с колегами не выходя с сайта и распределяй задачи между ними. Данный сайт находится в разработке и пока что не имеет нужного функционала для тестирования, но при достижении основного функционала он выйдет в открытый доступ',
		image: [
			'/projects/taskflow/1.png',
			'/projects/taskflow/2.png',
			'/projects/taskflow/3.png',
			'/projects/taskflow/4.png',
			'/projects/taskflow/5.png',
			'/projects/taskflow/6.png',
			'/projects/taskflow/7.png',
			'/projects/taskflow/8.png'
		],
		usesTechnology: [
			'NextJS',
			'Tailwindcss',
			'TypeScript',
			'Redux Toolkit',
			'Lucide Icon',
			'clsx'
		],
		githubUrl: 'https://github.com/Kirill-Ant1511/task-flow'
	},
	{
		id: '3',
		title: 'DiveSea 🖼️',
		description:
			'Простой проект, в котором я изучал вёрстку на чистом HTML/CSS/JS. Данный проект помог мне закрепить имеющиеся знания в вёрстке и изучить много нового',
		image: [
			'/projects/divesea/1.png',
			'/projects/divesea/2.png',
			'/projects/divesea/3.png',
			'/projects/divesea/4.png',
			'/projects/divesea/5.png',
			'/projects/divesea/6.png',
			'/projects/divesea/7.png',
			'/projects/divesea/8.png',
			'/projects/divesea/9.png'
		],
		usesTechnology: ['HTML', 'CSS', 'JS', 'Git', 'GitHub'],
		githubUrl: 'https://github.com/Kirill-Ant1511/DiveSea'
	},
	{
		id: '4',
		title: 'Simple Auth 🔐',
		description:
			'Простой проект для изучения аутентификации и работы с API. Данный проект помог мне изучить минимальную работу с API и аутентификацию, а также закрепить знания в работе с React и способоми защиты страниц от неавторизованных пользователей',
		image: [
			'/projects/simpleauth/1.png',
			'/projects/simpleauth/2.png',
			'/projects/simpleauth/3.png',
			'/projects/simpleauth/4.png',
			'/projects/simpleauth/5.png'
		],
		usesTechnology: [
			'React',
			'TypeScript',
			'axios',
			'Lucide Icon',
			'clsx',
			'react-router-dom',
			'supabase-js'
		],
		githubUrl: 'https://github.com/Kirill-Ant1511/simple-auth'
	}
]

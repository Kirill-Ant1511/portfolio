import { Greeting } from '@/components/Greeting'
import { MySkills } from '@/components/MySkills'
import { Projects } from '@/components/Projects'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col items-center text-white gap-10 overflow-x-hidden'>
			<header className='fixed top-0 w-full flex justify-center items-center bg-blue-500 shadow-pink-500 shadow-md p-4'>
				<nav className='flex gap-2'>
					<Link href='#Greeting'>Обо мне</Link>
					<Link href='#Skills'>Навыки</Link>
					<Link href='#Projects'>Проекты</Link>
				</nav>
			</header>
			<div className='flex flex-col items-center gap-10 py-20'>
				<Greeting />
				<MySkills />
				<Projects />
			</div>
		</div>
	)
}

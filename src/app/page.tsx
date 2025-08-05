import { Greeting } from '@/components/Greeting'
import { MySkills } from '@/components/MySkills'
import { Projects } from '@/components/Projects'

export default function Home() {
	return (
		<div className='min-h-screen min-w-screen flex flex-col items-center py-4 text-white bg-neutral-800 gap-10'>
			<Greeting />
			<MySkills />
			<Projects />
		</div>
	)
}

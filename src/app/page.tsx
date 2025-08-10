import { Greeting } from '@/components/Greeting'
import { MySkills } from '@/components/MySkills'
import { Projects } from '@/components/Projects'
import { Header } from '@/components/ui/Header'

export default function Home() {
	return (
		<div className='flex flex-col items-center text-foreground gap-10 overflow-x-hidden bg-background'>
			<Header />
			<div className='flex flex-col items-center gap-10 py-20'>
				<Greeting />
				<MySkills />
				<Projects />
			</div>
		</div>
	)
}

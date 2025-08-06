import { projects } from '@/data/project.data'
import { ProjectCard } from './Cards/ProjectCard'

interface Props {}

export function Projects({}: Props) {
	return (
		<div
			id='Projects'
			className='flex flex-col items-center mb-32'
		>
			<h1 className='text-4xl font-bold mb-5'>My Projects</h1>
			<div className='flex flex-col items-center gap-5'>
				{projects.map(project => (
					<ProjectCard
						key={project.id}
						project={project}
					/>
				))}
			</div>
		</div>
	)
}

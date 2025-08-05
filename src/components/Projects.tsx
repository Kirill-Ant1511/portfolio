import { projects } from '@/data/project.data'
import { ProjectCard } from './Cards/ProjectCard'

interface Props {}

export function Projects({}: Props) {
	return (
		<div>
			<h1 className='text-4xl font-bold'>My Projects</h1>
			<div className='flex flex-col gap-5'>
				{projects.map(project => (
					<ProjectCard
						key={project.title}
						project={project}
					/>
				))}
			</div>
		</div>
	)
}

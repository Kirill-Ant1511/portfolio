import { IProject } from '@/types/project.types'

interface Props {
	project: IProject
}

export function ProjectCard({ project }: Props) {
	return <div>{project.title}</div>
}

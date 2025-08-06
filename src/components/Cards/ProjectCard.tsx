import { Pages } from '@/configs/pages.config'
import { IProject } from '@/types/project.types'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	project: IProject
}

export function ProjectCard({ project }: Props) {
	return (
		<div className='flex p-3 bg-black rounded-lg gap-5 max-w-screen w-3/4'>
			<Image
				src={project.image[0]}
				alt={project.title}
				width={400}
				height={100}
				className='rounded-2xl border-blue-400 border-2 shadow-md shadow-pink-400'
				priority
			/>
			<div className='flex flex-col gap-2'>
				<h1 className='text-2xl font-semibold'>{project.title}</h1>
				<p className='relative text-base text-white/50 text-ellipsis line-clamp-4'>
					{project.description}
				</p>
				<Link
					href={Pages.PROJECT(project.id)}
					className='flex items-center justify-around p-2 bg-blue-500 rounded-lg self-start'
				>
					See more
				</Link>
			</div>
		</div>
	)
}

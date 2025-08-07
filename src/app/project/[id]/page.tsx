import { Pages } from '@/configs/pages.config'
import { projects } from '@/data/project.data'
import { ArrowLeft, Github } from 'lucide-react'
import Link from 'next/link'
import { OpeningImage } from './OpeningImage'

interface Props {
	params: Promise<{ id: string }>
}

export default async function ProjectForIdPage({ params }: Props) {
	const { id } = await params
	const project = projects.find(project => project.id === id)
	if (project) {
		return (
			<div className='flex flex-col items-center text-white p-4'>
				<div className='flex justify-between items-center w-full  mb-5 '>
					<Link
						href={Pages.HOME}
						className='flex items-center gap-2'
					>
						{' '}
						<ArrowLeft size={20} /> Go to home page
					</Link>
					<h1 className='text-blue-500 text-shadow-md text-shadow-pink-500 text-3xl self-end'>
						{project.title}
					</h1>
				</div>
				<div className=' grid grid-cols-2 gap-5'>
					<div className='grid grid-cols-2 gap-2 justify-start items-start'>
						{project.image.map(src => (
							<OpeningImage
								src={src}
								key={src}
								width={400}
								height={400}
								alt='source'
							/>
						))}
					</div>
					<div className='flex flex-col gap-2'>
						<p className='text-xl'>{project.description}</p>
						<div className=''>
							Using technology:
							<div className='grid grid-rows-5 grid-cols-2'>
								{project.usesTechnology.map((tech, index) => (
									<div key={tech}>
										<span className='text-white/50'>{index + 1}.</span> {tech}
									</div>
								))}
							</div>
						</div>
						<Link
							href={project.githubUrl}
							className='flex items-center p-2 bg-blue-500 rounded-lg self-start'
						>
							<Github /> GitHub Link
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

import { ISkill } from '@/types/skill.types'
import { X } from 'lucide-react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

interface Props {
	skill: ISkill
	onClose: () => void
}

export function SkillModal({ skill, onClose }: Props) {
	return createPortal(
		<div className='absolute top-0 min-h-screen min-w-screen bg-black/50 flex items-center justify-center z-50 text-white'>
			<div className='bg-black p-4 rounded-lg w-1/3 '>
				<div className='flex justify-between items-center'>
					<h1 className='flex items-center gap-2 text-xl font-semibold'>
						<Image
							src={skill.icon}
							alt={skill.title}
							width={50}
							height={50}
							priority
						/>
						{skill.title}
					</h1>
					<button
						onClick={onClose}
						className='cursor-pointer'
					>
						<X />
					</button>
				</div>
				<p className='text-sm text-white/50'>{skill.description}</p>
				<div>
					<h2 className='text-lg font-semibold'>Main Skills</h2>
					<div className='flex flex-col gap-2'>
						{skill.mainSkill.map((skill, index) => (
							<div
								key={skill}
								className='flex items-center gap-2 p-1 bg-neutral-700 rounded-md'
							>
								<div className='text-sm'>{index + 1}.</div>
								<div className='text-sm'>{skill}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>,
		document.body
	)
}

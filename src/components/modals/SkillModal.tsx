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
		<div className='fixed top-20 left-3 bg-card p-4 rounded-lg w-100 max-md:top-15 max-md:left-0 max-md:w-full text-white animate-open-skill-modal'>
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
				<h2 className='text-lg font-semibold'>Основные умения:</h2>
				<div className='flex flex-col gap-2 text-foreground'>
					{skill.mainSkill.map((skill, index) => (
						<div
							key={skill}
							className='flex items-center gap-2 py-1 px-2 bg-background rounded-md'
						>
							<div className='text-sm'>{index + 1}.</div>
							<div className='text-sm'>{skill}</div>
						</div>
					))}
				</div>
			</div>
		</div>,
		document.body
	)
}

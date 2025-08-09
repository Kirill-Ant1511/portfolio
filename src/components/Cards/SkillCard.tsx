'use client'
import { ISkill } from '@/types/skill.types'
import Image from 'next/image'
import { memo, useState } from 'react'
import { SkillModal } from '../modals/SkillModal'

interface Props {
	skill: ISkill
}

function SkillCard({ skill }: Props) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			{isOpen && (
				<SkillModal
					skill={skill}
					onClose={() => setIsOpen(false)}
				/>
			)}
			<button
				className='p-4 flex items-center justify-center gap-2 rounded-lg bg-black cursor-pointer h-20 w-64'
				onClick={() => {
					setIsOpen(true)
					console.log('click')
				}}
			>
				<Image
					src={skill.icon}
					alt={skill.title}
					width={40}
					height={40}
					priority
				/>
				<div>{skill.title}</div>

				<span className='text-xs text-white/50'>See More...</span>
			</button>
		</div>
	)
}

export default memo(SkillCard)

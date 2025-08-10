import { ISkillLibrary } from '@/types/skill.types'
import Image from 'next/image'

interface Props {
	skill: ISkillLibrary
}

export function SkillMiniCard({ skill }: Props) {
	return (
		<div className='flex items-center gap-2 py-1 px-2 bg-card/70 w-fit rounded-lg text-white'>
			<Image
				src={skill.icon}
				alt={skill.title}
				width={25}
				height={25}
				priority
			/>
			{skill.title}
		</div>
	)
}

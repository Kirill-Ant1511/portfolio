import { skills } from '@/data/skills.data'
import { SkillCard } from './Cards/SkillCard'

export function MySkills() {
	return (
		<div
			id='Skills'
			className='flex flex-col items-center gap-5'
		>
			<h1 className='text-4xl font-bold'>My Skills</h1>
			<div className='grid grid-cols-2 gap-5'>
				{skills.map(skill => (
					<SkillCard
						key={skill.title}
						skill={skill}
					/>
				))}
			</div>
		</div>
	)
}

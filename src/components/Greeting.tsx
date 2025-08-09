import { mySkills } from '@/data/skills.data'
import Image from 'next/image'
import { SkillMiniCard } from './Cards/SkillMiniCard'

export function Greeting() {
	return (
		<div
			id='Greeting'
			className='flex justify-center items-center gap-10 w-[80%] max-lg:flex-col'
		>
			<Image
				src='/my-photo.jpg'
				alt='Kirill'
				width={700}
				height={700}
				className='rounded-xl'
				priority
			/>
			<div className='w-2/3 max-lg:w-[90%]'>
				<div className='space-y-0.5'>
					<h1 className='text-5xl max-md:text-xl font-bold text-shadow-lg text-shadow-pink-500 text-blue-500/90'>
						Привет, я Кирилл
					</h1>
					<span className='text-sm msx-sm:text-xs text-white/50'>
						Я учусь в
						<a
							href='https://www.sut.ru/'
							target='_blank'
						>
							Санкт-Петербургский государственный университет телекоммуникаций
							им. проф. М. А. Бонч-Бруевича
						</a>
					</span>
				</div>
				<p className='text-2xl text-gray-300 max-sm:text-sm'>
					Я занимаюсь разработкой веб-сайтов на React/NextJS
				</p>
				<div className='mt-10 max-lg:hidden'>
					<h5 className='text-sm text-white/50 mb-1'>Мои умения:</h5>
					<div className='flex gap-2 flex-wrap'>
						{mySkills.map(skill => (
							<SkillMiniCard
								key={skill.title}
								skill={skill}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

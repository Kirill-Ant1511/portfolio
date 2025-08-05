import Image from 'next/image'

export function Greeting() {
	return (
		<div className='flex justify-center items-center gap-10 w-[80%]'>
			<Image
				src='/my-photo.jpg'
				alt='Kirill'
				width={400}
				height={400}
				className='rounded-xl'
				priority
			/>
			<div className='w-1/3'>
				<div className='space-y-0.5'>
					<h1 className='text-5xl font-bold text-shadow-lg text-shadow-pink-500 text-blue-500/90'>
						Hello, I'm Kirill
					</h1>
					<a
						href='https://www.sut.ru/'
						target='_blank'
						className='text-sm text-white/50'
					>
						Saint Petersburg State University of Telecommunications named after
						prof. M.A. Bonch-Bruevich
					</a>
				</div>
				<p className='text-2xl text-gray-300'>
					I develop websites on React/NextJS.
				</p>
			</div>
		</div>
	)
}

'use client'
import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
interface Props {
	src: string
	width: number
	height: number
	alt: string
}

export function OpeningImage({ src, width, height, alt }: Props) {
	const [isOpenImage, setIsOpenImage] = useState(false)
	return (
		<button
			onClick={() => setIsOpenImage(!isOpenImage)}
			className={cn(
				isOpenImage
					? 'fixed min-w-screen min-h-screen top-0 left-0 flex items-center justify-center bg-black/50'
					: '',
				'transition-all duration-300'
			)}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={cn(
					isOpenImage ? 'w-250 ' : '',
					'transition-all duration-300 rounded-lg border-2 border-blue-500'
				)}
				priority
			/>
		</button>
	)
}

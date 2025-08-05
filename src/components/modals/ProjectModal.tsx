import { createPortal } from 'react-dom'

interface Props {}

export function ProjectModal({}: Props) {
	return createPortal(
		<div>
			<h1>ProjectModal</h1>
		</div>,
		document.body
	)
}

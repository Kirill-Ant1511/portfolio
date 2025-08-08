import { createPortal } from 'react-dom'

export function ProjectModal() {
	return createPortal(
		<div>
			<h1>ProjectModal</h1>
		</div>,
		document.body
	)
}

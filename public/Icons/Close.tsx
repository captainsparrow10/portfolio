import React from 'react'

export default function CloseIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="64"
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<g>
				<path fill="#fff" d="M0 0H24V24H0z" />
				<path
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M7 17l9.9-9.9M7 7l9.9 9.9"
				/>
			</g>
		</svg>
	)
}

import { Variants } from 'framer-motion'

export const fromTopVariants: Variants = {
	initial: {
		x: -50,
		opacity: 0,
	},

	animate: (custom) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
			ease: [0.22, 1, 0.36, 1],
			duration: 1,
		},
	}),
}

export const fromBottomVariants: Variants = {
	initial: {
		y: 50,
		opacity: 0,
	},

	animate: (custom) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
			ease: [0.22, 1, 0.36, 1],
			duration: 1,
		},
	}),
}

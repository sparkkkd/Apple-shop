import styles from './IphoneComponent.module.sass'

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { useScroll, useTransform } from 'framer-motion'

import IphoneModel from '../../gltf/Iphone-model'

export default function IphoneComponent() {
	const element = useRef<any>()
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start end', 'end start'],
	})

	const z1 = useTransform(scrollYProgress, [0, 1], [-9, 6])
	const z2 = useTransform(scrollYProgress, [0, 2], [-6, 9])

	return (
		<div className={styles.iphone}>
			<Canvas className={styles.canvas} ref={element} orthographic>
				<OrbitControls scale={1} enableZoom={false} enableRotate={false} />
				<PerspectiveCamera makeDefault position={[1, 1, -10]} />
				<Environment preset='city' />
				<IphoneModel
					positionZ={z1}
					rotatePropY={-3}
					rotatePropX={0}
					rotatePropZ={0}
					positionX={-5}
				/>

				<IphoneModel positionZ={z2} rotatePropY={3} rotatePropX={0} rotatePropZ={0} positionX={5} />
			</Canvas>
		</div>
	)
}

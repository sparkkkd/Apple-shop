import styles from './About.module.sass'

import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import { MFeaturesEnumeration } from '../../UI/FeaturesEnumeration/FeaturesEnumeration'

import { motion } from 'framer-motion'

import { ABOUT_ITEMS } from './constant'
import { fromBottomVariants } from '../../../animations/animations'

export default function About() {
	return (
		<motion.section
			initial='initial'
			whileInView='animate'
			viewport={{ amount: 0.2, once: true }}
			className={`${styles.about}`}
		>
			<SectionTitle>О нас</SectionTitle>
			<motion.div
				initial='initial'
				whileInView='animate'
				viewport={{ amount: 0.2, once: true }}
				className={styles.wrapper}
			>
				{ABOUT_ITEMS.map(({ id, title, text }, i) => (
					<MFeaturesEnumeration
						key={id}
						title={title}
						text={text}
						variants={fromBottomVariants}
						custom={i + 3}
					/>
				))}
			</motion.div>
		</motion.section>
	)
}

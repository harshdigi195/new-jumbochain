'use client';
import { useMemo } from 'react';
import styles from './Iconixtosolidlinkedin.module.css';

const Iconixtosolidlinkedin = ({
	iconixtosolidlinkedin,
	linkedIn,
	iconixtosolidarrowTopRigh,
	propPadding,
	propWidth,
}) => {
	const iconixtosolidlinkedinStyle = useMemo(() => {
		return {
			padding: propPadding,
		};
	}, [propPadding]);

	const linkedInStyle = useMemo(() => {
		return {
			width: propWidth,
		};
	}, [propWidth]);

	return (
		<div
			className={styles.iconixtosolidlinkedin}
			style={iconixtosolidlinkedinStyle}
		>
			<div className={styles.childFramesParent}>
				<button className={styles.childFrames}>
					<div className={styles.childFrames1} />
					<img
						className={styles.iconixtosolidlinkedin1}
						alt=''
						src={iconixtosolidlinkedin}
					/>
				</button>
				<div className={styles.childFrames2}>
					<div
						className={styles.linkedin}
						style={linkedInStyle}
					>
						{linkedIn}
					</div>
					<div className={styles.followers}>2000+ followers</div>
				</div>
			</div>
			<img
				className={styles.iconixtosolidarrowTopRight}
				loading='lazy'
				alt=''
				src={iconixtosolidarrowTopRigh}
			/>
		</div>
	);
};

export default Iconixtosolidlinkedin;

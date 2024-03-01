'use client';
import { useMemo } from 'react';
import styles from './OurVisionFrame.module.css';

const OurVisionFrame = ({
	smartContractBasedHybridL,
	solarwalletOutline,
	propHeight,
	propTextAlign,
}) => {
	const smartContractBasedStyle = useMemo(() => {
		return {
			height: propHeight,
			textAlign: propTextAlign,
		};
	}, [propHeight, propTextAlign]);

	return (
		<div className={styles.ourVisionFrame}>
			<div className={styles.smartContractBasedHybridLaParent}>
				<div
					className={styles.smartContractBased}
					style={smartContractBasedStyle}
				>
					{smartContractBasedHybridL}
				</div>
				<div className={styles.ellipseParent}>
					<div className={styles.frameChild} />
					<img
						className={styles.solarwalletOutlineIcon}
						alt=''
						src={solarwalletOutline}
					/>
				</div>
			</div>
		</div>
	);
};

export default OurVisionFrame;

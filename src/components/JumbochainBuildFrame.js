'use client';
import { useMemo } from 'react';
import styles from './JumbochainBuildFrame.module.css';

const JumbochainBuildFrame = ({
	solarwalletOutline,
	mainnetLaunch,
	propWidth,
	propFlex,
}) => {
	const mainnetLaunchStyle = useMemo(() => {
		return {
			width: propWidth,
			flex: propFlex,
		};
	}, [propWidth, propFlex]);

	return (
		<div className={styles.jumbochainBuildFrame}>
			<div className={styles.frameParent}>
				<div className={styles.ellipseParent}>
					<div className={styles.frameChild} />
					<img
						className={styles.solarwalletOutlineIcon}
						alt=''
						src={solarwalletOutline}
					/>
				</div>
				<div
					className={styles.mainnetLaunch}
					style={mainnetLaunchStyle}
				>
					{mainnetLaunch}
				</div>
			</div>
		</div>
	);
};

export default JumbochainBuildFrame;

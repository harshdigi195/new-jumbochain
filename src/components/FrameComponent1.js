import styles from './FrameComponent1.module.css';

const FrameComponent1 = ({ rectangle447 }) => {
	return (
		<div className={styles.rectangleParent}>
			<div className={styles.frameChild} />
			<img
				className={styles.frameItem}
				loading='lazy'
				alt=''
				src={rectangle447}
			/>
			<div className={styles.frameParent}>
				<div className={styles.dec2023Parent}>
					<div className={styles.dec2023}>8 Dec, 2023 </div>
					<div className={styles.minRead}>4 Min Read</div>
				</div>
				<div className={styles.navigatingTheFutureProtojuWrapper}>
					<div className={styles.navigatingTheFuture}>
						Navigating The Future: ProtoJumbo Beta Version Redefines The
						Blockchain Landscape
					</div>
				</div>
			</div>
		</div>
	);
};

export default FrameComponent1;

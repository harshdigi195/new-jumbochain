import FrameComponent1 from './FrameComponent1';
import styles from './JoinTheCommunityFrame.module.css';

const JoinTheCommunityFrame = () => {
	return (
		<div className={styles.joinTheCommunityFrame}>
			<FrameComponent1 rectangle447='/rectangle-447@2x.png' />
			<FrameComponent1 rectangle447='/rectangle-449@2x.png' />
			<div className={styles.rectangleParent}>
				<div className={styles.frameChild} />
				<img
					className={styles.frameItem}
					loading='lazy'
					alt=''
					src='/rectangle-451@2x.png'
				/>
				<div className={styles.dec2023Parent}>
					<div className={styles.dec2023}>8 Dec, 2023 </div>
					<div className={styles.navigatingTheFutureProtojuWrapper}>
						<div className={styles.navigatingTheFuture}>
							Navigating The Future: ProtoJumbo Beta Version Redefines The
							Blockchain Landscape
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinTheCommunityFrame;

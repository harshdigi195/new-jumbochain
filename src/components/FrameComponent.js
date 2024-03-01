import styles from './FrameComponent.module.css';
import Iconixtosolidlinkedin from './Iconixtosolidlinkedin';

const FrameComponent = () => {
	return (
		<div className={styles.linkedInFollowersWrapper}>
			<div className={styles.linkedInFollowers}>
				<Iconixtosolidlinkedin
					iconixtosolidlinkedin='/iconixtosolidlinkedin.svg'
					linkedIn='LinkedIn'
					iconixtosolidarrowTopRigh='/iconixtosolidarrowtopright.svg'
				/>
				<div className={styles.iconixtosolidlinkedin}>
					<div className={styles.frameParent}>
						<button className={styles.ellipseParent}>
							<div className={styles.frameChild} />
							<img
								className={styles.iconixtosolidfacebook}
								alt=''
								src='/iconixtosolidfacebook.svg'
							/>
						</button>
						<img
							className={styles.iconixtosolidarrowTopRight}
							alt=''
							src='/iconixtosolidarrowtopright-1.svg'
						/>
						<div className={styles.facebookParent}>
							<div className={styles.facebook}>Facebook</div>
							<div className={styles.followers}>2000+ followers</div>
						</div>
					</div>
				</div>
				<Iconixtosolidlinkedin
					iconixtosolidlinkedin='/iconixtosoliddiscord.svg'
					linkedIn='Discord'
					iconixtosolidarrowTopRigh='/iconixtosolidarrowtopright-2.svg'
					propPadding='var(--padding-11xl) var(--padding-17xl) var(--padding-20xl)'
					propWidth='114px'
				/>
				<div className={styles.iconixtosolidlinkedin1}>
					<div className={styles.frameGroup}>
						<div className={styles.ellipseGroup}>
							<div className={styles.frameItem} />
							<img
								className={styles.iconixtosolidtwitter}
								loading='lazy'
								alt=''
								src='/iconixtosolidtwitter.svg'
							/>
						</div>
						<div className={styles.twitterParent}>
							<div className={styles.twitter}>Twitter</div>
							<div className={styles.followers1}>2000+ followers</div>
						</div>
					</div>
					<img
						className={styles.iconixtosolidarrowTopRight1}
						alt=''
						src='/iconixtosolidarrowtopright-3.svg'
					/>
				</div>
				<div className={styles.iconixtosolidlinkedin2}>
					<div className={styles.frameContainer}>
						<div className={styles.ellipseContainer}>
							<div className={styles.frameInner} />
							<img
								className={styles.iconixtosolidinstagram}
								loading='lazy'
								alt=''
								src='/iconixtosolidinstagram.svg'
							/>
						</div>
						<img
							className={styles.iconixtosolidarrowTopRight2}
							alt=''
							src='/iconixtosolidarrowtopright-4.svg'
						/>
						<div className={styles.instagramParent}>
							<div className={styles.instagram}>Instagram</div>
							<div className={styles.followers2}>2000+ followers</div>
						</div>
					</div>
				</div>
				<Iconixtosolidlinkedin
					iconixtosolidlinkedin='/iconixtosolidslack.svg'
					linkedIn='Slack'
					iconixtosolidarrowTopRigh='/iconixtosolidarrowtopright-5.svg'
					propPadding='var(--padding-base) var(--padding-17xl) var(--padding-32xl)'
					propWidth='79px'
				/>
			</div>
		</div>
	);
};

export default FrameComponent;

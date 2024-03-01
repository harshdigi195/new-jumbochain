import styles from './Iconix.module.css';

const Iconix = () => {
	return (
		<section className={styles.iconix}>
			<div className={styles.frameContainer}>
				<div className={styles.frameContainerChild} />
				<div className={styles.textContainer}>
					<div className={styles.rectangleShape}>
						<div className={styles.ellipseShape}>
							<button className={styles.solarWalletLogo}>
								<div className={styles.announcing}>Announcing</div>
							</button>
							<div className={styles.jumboBlockchainMainnetContainer}>
								<p className={styles.jumboBlockchainMainnet}>
									Jumbo Blockchain Mainnet Launch
								</p>
								<p className={styles.march2024}>19 March 2024</p>
							</div>
						</div>
						<div className={styles.pioneeringTheEvolution}>
							Pioneering the Evolution of Blockchain Technology
						</div>
					</div>
					<button className={styles.text}>
						<div className={styles.learnMore}>Learn more</div>
					</button>
				</div>
				<div className={styles.text1}>
					<img
						className={styles.textIcon}
						loading='lazy'
						alt=''
						src='/images/announcement.png'
					/>
				</div>
			</div>
		</section>
	);
};

export default Iconix;

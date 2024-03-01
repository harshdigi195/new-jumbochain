import styles from './RectangleShape.module.css';

const RectangleShape = () => {
	return (
		<div className={styles.rectangleShape}>
			<div className={styles.blogFrame}>
				<div className={styles.decorativeText}>
					<div className={styles.ourPartners}>Our Partners</div>
				</div>
				<div className={styles.linkedInIcon}>
					<img
						className={styles.image53Icon}
						loading='lazy'
						alt=''
						src='/images/image 53.png'
					/>
					<img
						className={styles.image54Icon}
						loading='lazy'
						alt=''
						src='/images/image 54.png'
					/>
					<img
						className={styles.image55Icon}
						loading='lazy'
						alt=''
						src='/images/image 55.png'
					/>
					<img
						className={styles.image58Icon}
						loading='lazy'
						alt=''
						src='/images/image 58.png'
					/>
					<img
						className={styles.image59Icon}
						loading='lazy'
						alt=''
						src='/images/image 59.png'
					/>
					<div className={styles.discordIcon}>
						<img
							className={styles.image57Icon}
							loading='lazy'
							alt=''
							src='/images/image 57.png'
						/>
					</div>
					<img
						className={styles.image56Icon}
						loading='lazy'
						alt=''
						src='/images/image 56.png'
					/>
					<img
						className={styles.image60Icon}
						loading='lazy'
						alt=''
						src='/images/image 60.png'
					/>
				</div>
			</div>
			<div className={styles.ourVisionFrame}>
				<div className={styles.ourVisionFrameInner}>
					<div className={styles.navbarFrameParent}>
						<div className={styles.navbarFrame}>
							<div className={styles.logoNode} />
							<img
								className={styles.iconixtosolidtree2}
								alt=''
								src='/iconixtosolidtree2.svg'
							/>
						</div>
						<div className={styles.sustainableAndLow}>
							Sustainable and low storage
						</div>
					</div>
				</div>
				<div className={styles.cartNode}>
					<div className={styles.blogsFrame}>
						<div className={styles.minReadNode} />
						<div className={styles.protoJumboBetaVersionRed}>
							<div className={styles.joinCommunityFrame} />
							<b className={styles.patents}>3+ Patents</b>
						</div>
					</div>
					<div className={styles.socialMediaIcons}>
						<div className={styles.linkedInIconNode}>
							<div className={styles.discordIconNode}>
								<div className={styles.twitterIconNode} />
								<img
									className={styles.iconixtosolidbranch}
									alt=''
									src='/iconixtosolidbranch.svg'
								/>
							</div>
							<div className={styles.dappsIntegration}>Dapps integration</div>
						</div>
					</div>
				</div>
			</div>
			<h1 className={styles.whyChooseJumbochainContainer}>
				<span>{`Why Choose `}</span>
				<span className={styles.jumbochain}>Jumbochain</span>
			</h1>
		</div>
	);
};

export default RectangleShape;

import styles from './JumboBlockchainFrame.module.css';
import MinReadFrame from './MinReadFrame';

const JumboBlockchainFrame = () => {
	return (
		<div className={styles.jumboBlockchainFrame}>
			<button className={styles.ourVisionFrame}>
				<div className={styles.explore}>Explore</div>
			</button>
			<div className={styles.rectangleFrame}>
				<div className={styles.blogsFrame}>
					<MinReadFrame
						iconixtosolidfolderTransf='/iconixtosolidfoldertransfer.svg'
						easyAdaptability='Easy adaptability'
					/>
					<div className={styles.blogsFrameInner}>
						<div className={styles.frameParent}>
							<div className={styles.wrapperGlobeComponentParent}>
								<div className={styles.wrapperGlobeComponent}>
									<img
										className={styles.globeComponentIcon}
										alt=''
										src='images/globe.png'
									/>
								</div>
								<MinReadFrame
									iconixtosolidfolderTransf='/iconixtosolidnft.svg'
									easyAdaptability='Support for NFT'
								/>
							</div>
							<div className={styles.frameGroup}>
								<div className={styles.jumboBlockchainLogoParent}>
									<div className={styles.jumboBlockchainLogo} />
									<img
										className={styles.iconixtosolidgrid2}
										alt=''
										src='/iconixtosolidgrid2.svg'
									/>
								</div>
								<div
									className={styles.plugPlay}
								>{`Plug & play multiple blockchains`}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JumboBlockchainFrame;

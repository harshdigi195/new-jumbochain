import Image from 'next/image';
import styles from './FrameComponent2.module.css';

const FrameComponent2 = () => {
	return (
		<div className={styles.headerSectionWrapper}>
			<div className={styles.headerSection}>
				<div className={styles.title}>
					<div className={styles.subtitle}>
						<div className={styles.contentFrame}>
							<div className={styles.subcontentFrame}>
								<div className={styles.utilImage}>
									<Image
										src='/images/dfb.png'
										width='192'
										height='200'
										className={styles.utilImg}
									/>
								</div>
								<div className={styles.dec}>
									<h3 className={styles.utilityOfBlockchain}>
										Utility of Blockchain
									</h3>
									<div className={styles.jumbochainIsCommitted}>
										Jumbochain is committed to its Vision and Mission of moving
										society to a sustainable living. Jumbochain is being built
										to provide solutions for real time industry problems.
									</div>
								</div>
							</div>
							<div className={styles.blogs}>
								<div className={styles.utilImage}>
									<Image
										src='/images/fast.png'
										width='256'
										height='256'
										className={styles.utilImg}
									/>
								</div>
								<div className={styles.joinTheCommunity}>
									<h3 className={styles.carbonFootprint}>Lightning Fast</h3>
									<div className={styles.jumbochainIsCommitted1}>
										With an average block generation time of just 150 to 300
										milliseconds, we stand as the fastest blockchain, handling
										millions of transactions with unparalleled speed.
									</div>
								</div>
							</div>
						</div>
						<div className={styles.jumboFrame}>
							<div className={styles.utilImage}>
								<Image
									src='/images/sustainable.png'
									width='401'
									height='226'
									className={styles.utilImg}
								/>
							</div>
							<div className={styles.ourVisionFrame}>
								<h3 className={styles.esgFramework}>Sustainability</h3>
								<div
									className={styles.esgStandsFor}
								>{`JumboBlockchain's Proof of Nexus (PoN) revolutionizes blockchain with sustainable, energy-efficient operations, reducing environmental impact by optimizing network connections. This innovative approach fosters a secure, transparent ecosystem, aligning with global sustainability goals. JumboBlockchain leads in eco-conscious tech, promising a greener future for the industry.`}</div>
							</div>
						</div>
					</div>
					<div className={styles.subtitle1}>
						<div className={styles.frameParent}>
							<div className={styles.frameWrapper}>
								<div className={styles.utilImage}>
									<Image
										src='/images/wallet.png'
										width='193'
										height='145'
										className={styles.utilImg}
									/>
								</div>
								<div className={styles.walletCompatibilityParent}>
									<h3 className={styles.walletCompatibility}>
										Wallet Compatibility
									</h3>
									<div className={styles.jumbochainWillHave}>
										Jumbochain will have inter chain operability and hence
										provide its users benefit of cross chain transfers.
									</div>
								</div>
							</div>
							<div className={styles.frameContainer}>
								<div className={styles.utilImage}>
									<Image
										src='/images/footprint.png'
										width='180'
										height='180'
										className={styles.utilImg}
									/>
								</div>
								<div className={styles.transactionSpeedtpsParent}>
									<h3 className={styles.transactionSpeedtps}>
										Carbon Footprint
									</h3>
									<div className={styles.withAnAverage}>
										the reduced storage and compute requirements of Jumbochain
										will drastically reduce the carbon footprint to more than
										50%.
									</div>
								</div>
							</div>
						</div>
						<div className={styles.subtitleInner}>
							<div className={styles.utilImage}>
								<Image
									src='/images/nftjumbo.png'
									width='250'
									height='250'
									className={styles.utilImg}
								/>
							</div>
							<div className={styles.nftMarketplaceParent}>
								<h3 className={styles.nftMarketplace}>NFT Support</h3>
								<div
									className={styles.toWorkFor}
								>{`Jumbo Blockchain introduces an innovative approach by utilizing non-fungible tokens (NFTs) as native tokens, transforming our patents into real-world assets represented as NFTs. These NFTs, or fractional NFTs, serve as a means for managing transaction fees and distributing rewards.`}</div>
							</div>
						</div>
					</div>
					<div className={styles.ourClientsFrame}>
						<div className={styles.rectangleShape}>
							<div className={styles.jumboBlogsFrame} />
							<div className={styles.navigatingTheFutureFrame}>
								<div className={styles.joinTheCommunityFrame} />
								<img
									className={styles.image67Icon}
									loading='lazy'
									alt=''
									src='/images/logo.svg'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FrameComponent2;
